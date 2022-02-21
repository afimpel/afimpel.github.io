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
	const { lang, listEducation, listJobs, listEduonline, env } = props;

	return (
		<Box sx={{ width: "100%" }}>
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
				<ListColapse
					close={true}
					list={listJobs}
					to="/cv/jobs/"
					primary={lang.cv.Jobs}
				/>
				<Divider />
				<ListColapse
					close={true}
					list={listEducation}
					to="/cv/education/"
					primary={lang.cv.Education}
				/>
				<Divider />
				<ListColapse
					close={true}
					list={listEduonline}
					to="/cv/eduonline/"
					primary={lang.cv.EducationOnline}
				/>
				<Divider />
			</FireNav>
		</Box>
	);
}
