import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import MyForm from "./MyForm";

export const GlobalContext = React.createContext();

export default function GlobalMode() {
	const [mode, setMode] = React.useState("light");
	const [nav, setNav] = React.useState(false);
	let lang = (navigator.language || navigator.language).split("-")[0];
	const [languaje, setLanguaje] = React.useState(
		lang.toLowerCase() === "es" ? "es" : "en"
	);
	const domainName = window.location.hostname;

	let providerMode = {
		toggleColorMode: () => {
			setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
		},
		toggleLanguaje: () => {
			setLanguaje((prevMode) => (prevMode === "es" ? "en" : "es"));
		},
		enableNav: () => {
			setNav(true);
		},
		timeModeDark: (value, modeManual) => {
			if (value.getHours() < 7) {
				if (modeManual) {
					setMode("dark");
					return !modeManual;
				}
			} else if (value.getHours() >= 20) {
				if (modeManual) {
					setMode("dark");
					return !modeManual;
				}
			} else {
				if (modeManual) {
					setMode("light");
					return !modeManual;
				}
			}
		},
		statusNav: nav,
		getInfo: { mode, languaje },
		getModeCurrent: mode,
		getLanguajeCurrent: languaje,
		developer: domainName === "localhost",
	};
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<GlobalContext.Provider value={providerMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider
					preventDuplicate
					dense={true}
					maxSnack={9}
					anchorOrigin={{
						vertical: "top",
						horizontal: "center",
					}}
					TransitionComponent={Slide}
				>
					<MyForm />
				</SnackbarProvider>
			</ThemeProvider>
		</GlobalContext.Provider>
	);
}
