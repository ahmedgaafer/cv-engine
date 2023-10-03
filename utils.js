import * as fs from "fs";

export const isValidPath = (path) => {
	try {
		fs.accessSync(path, fs.R_OK);
	} catch (e) {
		return false;
	}
	return true;
};
