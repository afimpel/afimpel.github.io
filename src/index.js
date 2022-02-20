import React from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
//import NotificationsIcon from "@mui/icons-material/Notifications";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalMode from "./GlobalMode";

ReactDOM.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<HashRouter hashType="noslash" basename="">
			<GlobalMode />
			</HashRouter>
		</StyledEngineProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
