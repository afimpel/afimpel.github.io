import * as React from "react";
//import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerSettings from "./DrawerSettings";
import ClockDigital from "./ClockDigital";
import MuiAppBar from "@mui/material/AppBar";
import { styled, alpha, useTheme } from "@mui/material/styles";

const drawerWidth = 256;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, backcolor }) => ({
	backdropFilter: "blur(5px)",
	backgroundColor: backcolor,
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export default function MasterAppBar(props) {
	const { children, open } = props;
	const theme = useTheme();
	let sss = alpha(
		theme.palette.mode === "dark"
			? theme.palette.background.paper
			: theme.palette.primary.dark,
		0.8
	);
	return (
		<AppBar position="fixed" open={open} backcolor={sss}>
			<Toolbar>
				{children}
				<Box sx={{ flexGrow: 1 }} />
				<Box>
					<ClockDigital />
				</Box>
				<Box>
					<DrawerSettings />
				</Box>
			</Toolbar>
		</AppBar>
	);
}
