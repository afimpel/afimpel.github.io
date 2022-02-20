import React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import GitHubIcon from "@mui/icons-material/GitHub";
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

export default function GitHubLayout(props) {
	const { lang, listRepo } = props;
	return (
		<>
			<LayoutBase>
				<FireNav component="nav" disablePadding>
					<LinkButton
						key={1000}
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
					<Divider />
					<ListColapse
						list={listRepo}
						to="/github/repo/"
						primary={lang.git.Repo}
						lengthText={" " + lang.git.Public}
						iconDefault ="code"
					/>
					<Divider />
				</FireNav>
			</LayoutBase>
		</>
	);
}
