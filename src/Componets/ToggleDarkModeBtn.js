import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { GlobalContext } from "../GlobalMode";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function ToggleDarkModeBtn(props) {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const theme = useTheme();

	const handleClickWithAction = React.useCallback(
		(variant, mode, texts) => {
			enqueueSnackbar(texts, {
				variant: variant,
				preventDuplicate: true,
				action: (key) => (
					<>
						{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
						<IconButton color="inherit" onClick={() => closeSnackbar(key)}>
							<CloseIcon />
						</IconButton>
					</>
				),
			});
		},
		[enqueueSnackbar, closeSnackbar]
	);
	const GlobalData = React.useContext(GlobalContext);

	let text =
		GlobalData.getLanguajeCurrent === "es"
			? "Modo" + (theme.palette.mode === "dark" ? " Claro" : " Oscuro")
			: (theme.palette.mode === "dark" ? "Ligth" : "Dark") + " Mode";
	switch (props.type) {
		case "menu":
			return (
				<MenuItem
					title={text}
					onClick={() => {
						GlobalData.toggleColorMode();
						handleClickWithAction("primary", theme.palette.mode, text);
					}}
					color="inherit"
				>
					{theme.palette.mode === "dark" ? (
						<Brightness7Icon sx={{ marginRight: 2 }} />
					) : (
						<Brightness4Icon sx={{ marginRight: 2 }} />
					)}
					{text}
				</MenuItem>
			);
		case "list":
			return (
				<ListItem
					button
					key="darkMode"
					title={text}
					onClick={() => {
						GlobalData.toggleColorMode();
						handleClickWithAction("primary", theme.palette.mode.mode, text);
					}}
				>
					<ListItemIcon>
						{theme.palette.mode === "dark" ? (
							<Brightness7Icon sx={{ marginRight: 2 }} />
						) : (
							<Brightness4Icon sx={{ marginRight: 2 }} />
						)}
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItem>
			);
		default:
			return (
				<IconButton
					title={text}
					sx={{ m: 0 }}
					onClick={() => {
						GlobalData.toggleColorMode();
						handleClickWithAction("primary", theme.palette.mode.mode, text);
					}}
					color="inherit"
				>
					{theme.palette.mode === "dark" ? (
						<Brightness7Icon />
					) : (
						<Brightness4Icon />
					)}
				</IconButton>
			);
	}
}
ToggleDarkModeBtn.defaultProps = { type: "icon" };
