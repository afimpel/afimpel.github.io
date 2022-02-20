import React, {  } from "react";
import Typography from "@mui/material/Typography";

export default function Dummy(props) {
	const { children } = props;
	return (
		<Typography variant="code" gutterBottom component="pre" wrap="nowrap">
			{JSON.stringify(props," "," ")}
			{children}
		</Typography>
	);
}
