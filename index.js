import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { isValidPath } from "./utils.js";

const __dirname = "./dist";
const args = process.argv.slice(2 - process.argv.length);

//#region console color overrides
const { info } = console;
console.info = (arg) => {
	info.call(console, `\x1b[33m${arg}\x1b[0m`);
};
console.error = (arg) => {
	info.call(console, `\x1b[31m${arg}\x1b[0m`);
};

//#endregion

async function manageArgs() {
	const flags = args.filter((arg) => arg[0] === "-");

	const srcFileName = flags.find((e) => /^-src/gi.test(e));

	if (!srcFileName) return console.error("Please provide src flag");

	const fileName = srcFileName.split("=")[1];

	const templatePath = `./cv-styles/${fileName}/index.js`;

	if (!isValidPath(templatePath))
		return console.error("Invalid template path");

	const { default: Template } = await import(templatePath);

	ReactPDF.render(Template, `${__dirname}/example.pdf`);
}

manageArgs();
