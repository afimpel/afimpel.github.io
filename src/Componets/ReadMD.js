import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import str_replace from "../Function/str_replace";
import "./md.css";
import githubContent from "../Function/githubContent";
export default function ReadMD(props) {
	const { file, env, replaceList } = props;
	const [markdown, setMarkdown] = useState();
	const [errorlog, setErrorlog] = useState();

	function fileNameFromUrl(url) {
		// eslint-disable-next-line no-useless-escape
		var matches1 = /\/([^\/?#]+)[^\/]*$/gim;
		let matches = matches1.exec(url);
		if (matches.length > 1) {
			return matches[0];
		}
		return null;
	}

	useEffect(() => {
		let m2 = fileNameFromUrl(file);

		githubContent(file)
			.then(function (response) {
				// handle success
				let res = "";
				const regex = /(?:\()(?:.*).(?:jpe?g|png|bmp)/gim;
				try {
					let m = regex.exec(response.data)[0].slice(1);
					//console.log("m", m, "m2", m2, "file", file);

					res = response.data.replace(
						m,
						str_replace(m2, "/" + m.split("/")[1], file)
					);
				} catch (error) {
					res = response.data;
				}
				let es = replaceList.map((ob) => {
					return str_replace(ob.origen, ob.replace, res);
				});
				res = es.length > 0 ? es[0] : res;
				setMarkdown(res);
				setErrorlog();
			})
			.catch(function (error) {
				// handle error
				setErrorlog(JSON.stringify(error));
				console.error(error);
				setMarkdown();
			});
	}, [file, replaceList]);

	return (
		<>
			{markdown ? (
				<ReactMarkdown children={markdown} />
			) : env ? (
				<Typography variant="code" gutterBottom component="pre" wrap="nowrap">
					{errorlog}
				</Typography>
			) : (
				""
			)}
		</>
	);
}
ReadMD.defaultProps = {
	replaceList: [],
};
