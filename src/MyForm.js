import React, { Suspense } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LinkButton from "./Componets/LinkButton";
import MasterAppBar from "./Componets/MasterAppBar";
import MiniDrawer from "./Componets/MiniDrawer";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchToolbar from "./Componets/SearchToolbar";
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
import IndexComponent from "./Page/Home";
import { GlobalContext } from "./GlobalMode";
import language from "./languaje.json";
import Error from "./Page/error";
import useMediaQuery from "@mui/material/useMediaQuery";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export default function MyForm() {
	const [open, setOpen] = React.useState(false);
	const [home, setHome] = React.useState(false);
	const GlobalData = React.useContext(GlobalContext);
	const matches = useMediaQuery("(min-width:600px)");

	React.useEffect(() => {
		if (!home) {
			if (window.location.hash !== "") {
				window.location.href = "/";
			}
		}
	}, [home]);

	let lang = language[GlobalData.getLanguajeCurrent];
	return (
		<Box sx={{ display: "flex" }}>
			<MasterAppBar open={open}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => setOpen(true)}
					edge="start"
					sx={{
						marginRight: "36px",
						...(open && { display: "none" }),
					}}
				>
					<MenuIcon />
				</IconButton>
				{matches ? (
					<>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ display: { xs: "none", sm: "block" } }}
						>
							{lang.fullname}
						</Typography>
						<SearchToolbar lang={lang} />
					</>
				) : (
					""
				)}
			</MasterAppBar>
			<MiniDrawer open={open} click={() => setOpen(false)}>
				{Page(lang).map((obj) => {
					return (
						<LinkButton
							key={obj.key}
							to={obj.links}
							alternative={obj.alternative}
							iconSRC={obj.icon}
							icons={true}
							type="list"
							primary={obj.title}
						/>
					);
				})}
			</MiniDrawer>
			<Box component="main" sx={{ flexGrow: 1, p: 1 }}>
				<DrawerHeader />
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route
							path="/"
							element={
								<IndexComponent
									lang={lang}
									env={GlobalData.developer}
									click={() => setHome(true)}
								/>
							}
						/>
						{home
							? Page(lang).map((obj) => {
								const OtherComponent = React.lazy(() =>
									import("./Page/" + obj.pages)
								);

								return (
									<Route
										key={obj.key}
										path={obj.path}
										exact
										element={
											<OtherComponent
												lang={lang}
												env={GlobalData.developer}
											/>
										}
									/>
								);
							})
							: ""}
						<Route component={<Error />} />
					</Routes>
				</Suspense>
			</Box>
		</Box>
	);
}
