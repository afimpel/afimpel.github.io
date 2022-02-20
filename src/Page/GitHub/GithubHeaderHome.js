import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinkButtonPublic from "../../Componets/LinkButtonPublic";
import { LocationOn, Web, Twitter, Work } from "@mui/icons-material";
import { Divider, Chip } from "@mui/material";
import Header from "../Header"


export default function GithubHeaderHome(props) {
	const { lang, owner } = props;
	const created_event = new Date(owner.created_at);
	const updated_event = new Date(owner.updated_at);
	const options = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	let createdDate = created_event.toLocaleDateString(lang.type, options);
	let updatedDate = updated_event.toLocaleDateString(lang.type, options);

	return (
		<Header {...props}>
			<Grid item xs>
				<Typography
					gutterBottom
					variant="h1"
					fontWeight={700}
					component="h1"
					sx={{ my: 0 }}
				>
					{owner.name}
				</Typography>
				<Typography variant="body2" gutterBottom color="text.secondary">
					{owner.bio}
				</Typography>
				<Divider sx={{ my: 1 }} />
				<Grid container spacing={1} columns={16}>
					<Grid item xs sx={{ p: "auto", textAlign: "center" }}>
						{lang.git.Created}: <b>{createdDate}</b>
					</Grid>
					<Grid item xs sx={{ p: "auto", textAlign: "center" }}>
						{lang.git.Updated}: <b>{updatedDate}</b>
					</Grid>
					<Grid item xs={3} sx={{ p: "auto", textAlign: "center" }}>
						<b>{owner.followers}</b> {lang.git.Followers}
					</Grid>
					<Grid item xs={3} sx={{ p: "auto", textAlign: "center" }}>
						<b>{owner.following}</b> {lang.git.Following}
					</Grid>
				</Grid>
			</Grid>

			<Grid container spacing={1} columns={16} color="text.secondary" sx={{mb:1}}>
				<Grid item xs={6} sx={{ p: "auto" }}>
					<Chip
						sx={{ px: 3 }}
						icon={<LocationOn />}
						label={owner.location}
					/>
				</Grid>
				<Grid item xs={4}>
					<Chip sx={{ px: 3 }} icon={<Work />} label={owner.company} />
				</Grid>
				<Grid item xs={3}>
					<LinkButtonPublic
						to={owner.blog}
						target="_blank"
						startIcon={<Web />}
						icons={false}
						sx={{ width: "100%", m: "auto" }}
					>
						afimpel.com
					</LinkButtonPublic>
				</Grid>
				<Grid item xs={3}>
					<LinkButtonPublic
						to={"//twitter.com/" + owner.twitter_username}
						target="_blank"
						startIcon={<Twitter />}
						icons={false}
						sx={{ width: "100%", m: "auto" }}
					>
						@afimpel
					</LinkButtonPublic>
				</Grid>
			</Grid>
		</Header>);
}
