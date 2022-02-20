import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import GitHubLayout from "./GitHubLayout";
import Repo from "./Repo";
import { Typography } from "@mui/material";
import api from "../../Function/githubApi";

export default function Index(props) {
	const [listRepo, setListRepos] = useState([]);
	const [errorlog, setErrorlog] = useState("");
	const [status, setStatus] = useState(200);
	const { env } = props;

	useEffect(() => {
		api
			.get(`/users/afimpel/repos`)
			.then(function (response) {
				setStatus(response.status);
				// handle success
				let res2 = response.data;
				let res = res2.map((o) => {
					//console.log("o", o);
					return { ...o, link: o.full_name + "/" + o.default_branch };
				});
				res = res.filter((i) => i.name !== "afimpel");
				res = res.filter((i) => i.name !== "SessionStart");//SessionStart
				setListRepos(res);
				setErrorlog();
			})
			.catch(function (error) {
				console.error("error", error);
				setStatus(error.status);
				// handle error
				setErrorlog(JSON.stringify(error));
				setListRepos([]);
			});
	}, []);

	if (status === 200) {
		return (
			<>
				<Routes>
					<Route
						path="/"
						element={<GitHubLayout {...props} listRepo={listRepo} />}
					>
						<Route index element={<Home {...props} listRepo={listRepo} />} />
						<Route
							path="repo/:user/:repo/*"
							element={<Repo {...props} list={listRepo} />}
						/>
					</Route>
				</Routes>
			</>
		);
	} else {
		return (
			<>
				{env ? (
					<Typography variant="code" gutterBottom component="pre" wrap="nowrap">
						{errorlog}
					</Typography>
				) : (
					""
				)}
			</>
		);
	}
}
