import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import ToggleDarkModeBtn from "./ToggleDarkModeBtn";
import LinkButton from "./LinkButton";
import WebIcon from "@mui/icons-material/Web";
import { useTheme, alpha } from "@mui/material/styles";
import ToggleLanguajeBtn from "./ToggleLanguajeBtn";

export default function DrawerSettings() {
	const [state, setState] = React.useState(false);
	const theme = useTheme();
	let sss = alpha(
		theme.palette.mode === "dark"
			? theme.palette.background.paper
			: theme.palette.primary.dark,
		0.2
	);

	const toggleDrawer = (open) => (event) => {
		setState(open);
	};

	const list = () => (
		<Box
			sx={{ width: 264, textAlign: "center", mt: 2 }}
			role="presentation"
			onClick={() =>
				setTimeout(function () {
					setState(false);
				}, 750)
			}
			onKeyDown={toggleDrawer(false)}
		>
			<ToggleLanguajeBtn />
			<List>
				<ToggleDarkModeBtn type="list" />
				<LinkButton
					to="//afimpel.com"
					target="_blank"
					iconSRC={<WebIcon />}
					icons={true}
					type="list"
					primary="afimpel.com"
				/>
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment key="right">
				<Drawer
					anchor="right"
					open={state}
					onClose={toggleDrawer(false)}
					sx={{
						zIndex: theme.zIndex.drawer + 10,
						backgroundColor: sss,
						backdropFilter: "blur(5px)",
					}}
				>
					{list()}
				</Drawer>
				<IconButton
					title="Settings"
					onClick={toggleDrawer(true)}
					size="large"
					edge="end"
					color="inherit"
				>
					<SettingsIcon />
				</IconButton>
			</React.Fragment>
		</div>
	);
}
