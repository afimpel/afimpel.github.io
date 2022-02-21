import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useParams, } from "react-router-dom";
import ReadMD from "../../Componets/ReadMD";
import GithubHeaderInner from "./GithubHeaderInner";
import api from "../../Function/githubApi";
import { GetSortOrder } from "../../Function/GetSortOrder";
import GitHubTree from "../../Componets/GitHubTree";

export default function Repo(props) {
	const { env, list, lang, ...rest } = props;

	let { repo, user, "*": branch } = useParams();

	const [listgitOBJ, setRepo] = useState({});
	const [listRepoFiles, setRepoFiles] = useState([]);

	useEffect(() => {
		setRepo(list.find((i) => i.name === repo));
		api
			.get(`/repos/${user}/${repo}/git/trees/${branch}?recursive=1`)
			.then(function (response) {
				// handle success
				let res = response.data;
				let lista = [];
				res.tree.sort(GetSortOrder("type", true));
				let i = 0;
				// eslint-disable-next-line array-callback-return
				res.tree.map((o) => {
					let _path = o.path.split("/");
					let __out = {
						...o,
						id: i,
						length: _path.length,
						name: _path.pop(),
						folder: _path.join("/"),
					};
					lista.push(__out);
					i++;
				});
				lista.sort(GetSortOrder("length", false));


				setRepoFiles(lista);
			})
			.catch(function (error) {
				console.error("error", error);
				setRepoFiles([]);
			});
	}, [branch, list, repo, user]);

	return (
		<>
			<GithubHeaderInner list={listgitOBJ} lang={lang} env={env} {...rest} />
			<GitHubTree repos={listRepoFiles} titles={lang.git.Files} />
			<Box sx={{ width: "98%", m: 2, p: 0 }}>
				<ReadMD
					env={env}
					file={`${user}/${repo}/${branch}/README.md`}
				/>
			</Box>
			{env ? (<>
				<Typography variant="code" gutterBottom component="pre" wrap="nowrap">
					{user}/{repo} - {env}
				</Typography>
				<hr />
				<Typography variant="code" gutterBottom component="pre" wrap="nowrap">
					{JSON.stringify(listgitOBJ,
						" ",
						" "
					)}
				</Typography>
			</>
			) : (
				""
			)}

		</>
	);
}
