import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListColapse from "../../Componets/ListColapse";
import api from "../../Function/githubApi";
import GithubHeaderHome from "./GithubHeaderHome";

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
	const { lang, listRepo } = props;
	const [owner, setOwner] = useState({});
	const [roto, setRoto] = useState(true);
	const [errorlog, setErrorlog] = useState("");

	useEffect(() => {
		api
			.get(`/users/afimpel`)
			.then(function (response) {
				// handle success
				let res = response.data;
				setOwner(res);
				setRoto(true);
				setErrorlog();
			})
			.catch(function (error) {
				console.error("error", error);
				// handle error
				setErrorlog(JSON.stringify(error));
				setOwner({});
				setRoto(false);
			});
	}, [listRepo]);

	return (
		<>
			{roto ? (
				<>
					<GithubHeaderHome {...props} owner={owner} />
					<Box sx={{ width: "100%" }}>
						<FireNav component="nav" disablePadding>
							<ListColapse
								close={true}
								list={listRepo}
								to="/github/repo/"
								lengthText={" " + lang.git.Public}
								primary={lang.git.Repo}
								iconDefault="code"
							/>
						</FireNav>
					</Box>
				</>
			) : (
				<pre>{errorlog}</pre>
			)}
		</>
	);
}
