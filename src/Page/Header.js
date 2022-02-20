import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LinkButtonPublic from "../Componets/LinkButtonPublic";
import { GitHub } from "@mui/icons-material";
import { Avatar } from "@mui/material";

export default function Header(props) {
	const { lang, min, children } = props;

	let pixels = min ? 130 : 256;

	return (
		<Paper
			sx={{
				p: 0,
				mx: 1,
				mt: 1,
				mb: 2,
				flexGrow: 1,
				borderRadius: 3,
				boxShadow: 5,
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				alignItems: "center",
				overflow: "hidden",
			}}
		>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={min ? 1.5 : 3}>
					<LinkButtonPublic
						color="success"
						icons={true}
						to={"//github.com/afimpel"}
						target="_blank"
						type="badge"
						badgeContent={
							<GitHub sx={{ fontSize: 45, color: "text.primary" }} />
						}
						sx={{
							boxShadow: 3,
							borderRadius: 0,
							p: min ? 1 : 2,
							height: "100%",
						}}
					>
						<Avatar
							sx={{ width: pixels, height: pixels, borderRadius: 5 }}
							alt={lang.fullname}
							title={lang.fullname}
							src="https://avatars.githubusercontent.com/u/10385173?v=4"
						/>
					</LinkButtonPublic>
				</Grid>
				<Grid
					item
					xs={12}
					sm={min ? 10.5 : 9}
					container
					sx={{ flexDirection: "column", p: 0, m: 0 }}
				>
					{children}
				</Grid>
			</Grid>
		</Paper>
	);
}
