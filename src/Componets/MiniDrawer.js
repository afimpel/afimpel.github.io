import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 256;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(8)})`,
	textAlign: "center",
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const DrawerMini = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function MiniDrawer(props) {
	const { click, open, children } = props;
	const matches = useMediaQuery("(min-width:600px)");

	const handleDrawerClose = () => {
		click(false);
	};
	return matches ? (
		<DrawerMini
			variant="permanent"
			open={open}
			onClick={handleDrawerClose}
			onKeyDown={handleDrawerClose}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>{children}</List>
		</DrawerMini>
	) : (
		<MuiDrawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			anchor="left"
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					cc<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>{children}</List>
		</MuiDrawer>
	);
}
MiniDrawer.defaultProps = {
	click: (change) => {
		console.log("change", change);
	},
	open: false,
};
