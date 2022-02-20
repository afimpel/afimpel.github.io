import React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListColapse from "../../Componets/ListColapse";
import ReadMD from "../../Componets/ReadMD";
import HeaderCV from "./HeaderCV";

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
	const { lang, listEducation, listJobs, env } = props;

	return (
		<Box sx={{ width: "100%" }}>
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
				<ListColapse
					noClose={true}
					list={listJobs}
					to="/cv/jobs/"
					primary={lang.cv.Jobs}
				/>
				<Divider />
				<ListColapse
					noClose={true}
					list={listEducation}
					to="/cv/education/"
					primary={lang.cv.Education}
				/>
				<Divider />
			</FireNav>
		</Box>
	);
}
