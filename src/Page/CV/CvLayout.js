import React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LinkButton from "../../Componets/LinkButton";
import ListColapse from "../../Componets/ListColapse";
import LayoutBase from "../LayoutBase";

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

export default function CvLayout(props) {
	const { lang, listEducation, listJobs } = props;
	return (
		<>
			<LayoutBase>
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
					<ListColapse list={listJobs} to="/cv/jobs/" primary={lang.cv.Jobs} />
					<Divider />
					<ListColapse
						list={listEducation}
						to="/cv/education/"
						primary={lang.cv.Education}
					/>
					<Divider />
				</FireNav>
			</LayoutBase>
		</>
	);
}
