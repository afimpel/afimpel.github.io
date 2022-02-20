import * as React from "react";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@mui/material";
import { calculateAge } from "../../Function/calculateAge";
import Header from "../Header";

export default function HeaderCV(props) {
	const { lang, min, children } = props;
	const updated_event = new Date("9/4/1984");
	const options = {
		month: "long",
		day: "numeric",
	};
	let updatedDate = updated_event.toLocaleDateString(lang.type, options);

	return (
		<Header {...props}>
			<Grid
				item
				xs
				sx={{
					p: 0,
					my: 1,
					mx: 0,
					textAlign: "center",
					display: "block",
					width: "99%",
				}}
			>
				<Typography
					variant={min ? "h2" : "h1"}
					fontWeight={700}
					component="h1"
					sx={{ my: 0, mx: 0, p: 0, textAlign: "center" }}
				>
					{lang.fullname}
				</Typography>
			</Grid>
			<Divider item xs sx={{ my: 1, width: "99%" }} />
			<Grid
				item
				xs
				container
				sx={{ p: 0, my: 0, mx: 1, textAlign: "center", width: "99%" }}
			>
				<Grid item xs={6} sx={{ m: 0 }}>
					<b>{calculateAge(9, 4, 1984)}</b> {lang.cv.Age}
				</Grid>
				<Grid item xs={6} sx={{ m: 0 }}>
					{lang.cv.Birthday}: <b>{updatedDate}</b>
				</Grid>
			</Grid>
			{children ? (
				<>
					<Divider item xs sx={{ my: 1, width: "99%" }} />
					<Typography
						item
						xs
						sx={{ px: 0, py: 0, width: "95%", textAlign: "justify" }}
						color="text.secondary"
					>
						{children}
					</Typography>
				</>
			) : (
				""
			)}
		</Header>
	);
}
