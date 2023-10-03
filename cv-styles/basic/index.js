import React from "react";
import { styles } from "./styles";
import { Page, Text, View, Document } from "@react-pdf/renderer";

const PDF = () => {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>Section #1</Text>
				</View>
				<View style={styles.section}>
					<Text>Section #2</Text>
				</View>
			</Page>
		</Document>
	);
};

export default PDF;
