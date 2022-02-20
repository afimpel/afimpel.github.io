import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkButton from "../Componets/LinkButton";
import ListColapse from "../Componets/ListColapse";
import ReadMD from "../Componets/ReadMD";
import HeaderCV from "./CV/HeaderCV";

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
	if (click) click();
	useEffect(() => {
		axios
			.get(
				`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Jobs/lists.json`
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
		axios
			.get(
				`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Education/lists.json`
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
					file={`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/resume_${lang.type}.md`}
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
		</>
	);
}
