import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkButton from "../Componets/LinkButton";
import ListColapse from "../Componets/ListColapse";
import ReadMD from "../Componets/ReadMD";
import HeaderCV from "./CV/HeaderCV";
import githubContent from "../Function/githubContent";
import { Paper, Grid, Typography } from "@mui/material";

const FireNav = styled(List)({
	"& .MuiListItemButton-root": {
		paddingLeft: 4,
		paddingRight: 4,
	},
	"& .MuiListItemIcon-root": {
		minWidth: 0,
		marginRight: 12,
	},
	"& .MuiSvgIcon-root": {
		fontSize: 25,
	},
});

export default function Home(props) {
	const { lang, env, click } = props;
	const [listJobs, setListJobs] = useState([]);
	const [listEducation, setListEducation] = useState([]);
	const [listLogos, setListLogos] = useState([]);
	const [listEduonline, setListEduonline] = useState([]);

	if (click) click();
	useEffect(() => {
		githubContent(
			`afimpel/afimpel.github.io/cv/CurriculumVitae/Jobs/lists.json`
		)
			.then(function (response) {
				// handle success
				let res = response.data;
				setListJobs(res);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
				setListJobs([]);
			});
		githubContent(
			`afimpel/afimpel.github.io/cv/CurriculumVitae/Education/lists.json`
		)
			.then(function (response) {
				// handle success
				let res = response.data;
				setListEducation(res);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
				setListEducation([]);
			});
		githubContent(
			`afimpel/afimpel.github.io/cv/CurriculumVitae/Education/eduonline.json`
		)
			.then(function (response) {
				// handle success
				let res = response.data;
				setListEduonline(res);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
				setListEduonline([]);
			});
		githubContent(`afimpel/afimpel.github.io/logos/icons.json`)
			.then(function (response) {
				// handle success
				let res = response.data;
				setListLogos(res);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
				setListLogos([]);
			});
	}, []);

	return (
		<>
			<HeaderCV {...props}>
				<ReadMD
					sx={{ p: 0 }}
					replaceList={[
						{ origen: "changeMe", replace: new Date().getFullYear() - 2004 },
					]}
					env={env}
					file={`afimpel/afimpel.github.io/cv/CurriculumVitae/resume_${lang.type}.md`}
				/>
			</HeaderCV>
			<FireNav component="nav" disablePadding>
				<LinkButton
					key={1000}
					to={"/cv"}
					alternative={"/cv"}
					iconSRC={<ContactPageIcon />}
					icons={true}
					type="list"
					primary={lang.cv.title}
					dense={true}
					primaryTypographyProps={{
						fontSize: 24,
						fontWeight: "medium",
					}}
				/>
				<Divider />
				<ListColapse
					list={listJobs}
					primary={lang.cv.Jobs}
					close={true}
					disabled={true}
				/>
				<Divider />
				<ListColapse
					list={listEducation}
					primary={lang.cv.Education}
					close={true}
					disabled={true}
				/>
				<Divider />
				<ListColapse
					list={listEduonline}
					primary={lang.cv.EducationOnline}
					close={true}
					disabled={true}
				/>
				<Divider />
				<LinkButton
					key={1001}
					to={"/github"}
					alternative={"/github"}
					iconSRC={<GitHubIcon />}
					icons={true}
					type="list"
					primary={lang.git.title}
					dense={true}
					primaryTypographyProps={{
						fontSize: 24,
						fontWeight: "medium",
					}}
				/>
			</FireNav>
			<Paper
				sx={{
					p: 1,
					mx: 1,
					mt: 1,
					mb: 2,
					flexGrow: 1,
					borderRadius: 3,
					boxShadow: 5,
					textAlign: "center",
				}}
			>
				<Typography
					gutterBottom
					variant="h4"
					fontWeight={700}
					component="h3"
					sx={{ my: 0 }}
				>
					{lang.technologie}
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Grid container spacing={2}>
					{listLogos.map((item, ind) => (
						<Grid item xs={item.size} sx={{ textAlign: "center" }}>
							<img height="64" alt={item.title} title={item.title} key={ind} src={`https://raw.githubusercontent.com/afimpel/afimpel.github.io/logos/${item.name}`} />
						</Grid>
					))}
				</Grid>
			</Paper>
		</>
	);
}
