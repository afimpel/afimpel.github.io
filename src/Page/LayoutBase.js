import React from "react";
import { Outlet } from "react-router-dom";

import Grid from "@mui/material/Grid";


export default function LayoutBase(props) {
	const { children } = props;
	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={12} md={4} lg={3}>
					{children}
				</Grid>
				<Grid item xs={12} md={8} lg={9}>
					<Outlet />
				</Grid>
			</Grid>
		</>
	);
}
