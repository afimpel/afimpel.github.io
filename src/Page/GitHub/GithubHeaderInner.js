import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinkButtonPublic from "../../Componets/LinkButtonPublic";
import { GitHub, Web, Download, Tag } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Header from "../Header"

export default function GithubHeaderInner(props) {
	const { lang, list } = props;
	const created_event = new Date(list.created_at);
	const updated_event = new Date(list.updated_at);
	const options = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	let createdDate = created_event.toLocaleDateString(lang.type, options);
	let updatedDate = updated_event.toLocaleDateString(lang.type, options);

	return list.owner ? (
		<Header {...props}>
			<Grid item xs>
				<Typography
					gutterBottom
					variant="h2"
					fontWeight={700}
					component="h1"
					sx={{ my: 0 }}
				>
					{list.name}
				</Typography>
				<Typography variant="body2" gutterBottom color="text.secondary">
					{list.description} / {list.language}
				</Typography>
				{list.topics.length !== 0 ? (
					<Typography variant="body2" gutterBottom color="text.secondary">
						{list.topics.map((val, ind) => {
							return <LinkButtonPublic
								to={"https://github.com/topics/" + val}
								type="chip"
								key={ind}
								icons={false}
								sx={{ px: 1, mx: 1 }}
								iconSRC={<Tag />}
							>
								{val}
							</LinkButtonPublic>
						})}
					</Typography>
				) : ""}
				<Divider sx={{ my: 1 }} />
				<Grid container spacing={1} columns={16}>
					<Grid item xs sx={{ p: "auto", textAlign: "center" }}>
						{lang.git.Created}: <b>{createdDate}</b>
					</Grid>
					<Grid item xs sx={{ p: "auto", textAlign: "center" }}>
						{lang.git.Updated}: <b>{updatedDate}</b>
					</Grid>
					<Grid item xs sx={{ p: "auto", textAlign: "center" }}>
						{lang.git.Branch}: <b>{list.default_branch}</b>
					</Grid>
				</Grid>
			</Grid>

			<Grid container spacing={1} columns={16} color="text.secondary" sx={{ mb: 2 }}>
				<Grid item xs sx={{ p: "auto" }}>
					<LinkButtonPublic
						to={list.html_url}
						type="chip"
						icons={false}
						sx={{ px: 3 }}
						iconSRC={<GitHub />}
					>
						Repo
					</LinkButtonPublic>
				</Grid>
				<Grid item xs sx={{ p: "auto" }}>
					<LinkButtonPublic
						to={list.url + "/tarball/" + list.default_branch}
						type="chip"
						icons={false}
						sx={{ px: 3, mx: 2 }}
						iconSRC={<Download />}
					>
						tar.gz
					</LinkButtonPublic>
					<LinkButtonPublic
						to={list.url + "/zipball/" + list.default_branch}
						type="chip"
						icons={false}
						sx={{ px: 3, mx: 2 }}
						iconSRC={<Download />}
					>
						zip
					</LinkButtonPublic>
				</Grid>
				{list.homepage !== null && list.homepage !== "" ? (
					<Grid item xs sx={{ p: "auto" }}>
						<LinkButtonPublic
							to={list.homepage}
							type="chip"
							icons={false}
							sx={{ px: 3, mx: "auto" }}
							iconSRC={<Web />}
						>
							GitHub Pages
						</LinkButtonPublic>
					</Grid>
				) : (
					""
				)}
			</Grid>
		</Header>) : (
		<></>
	);
}
