import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Jobs from "./Jobs";
import SubJobs from "./SubJobs";
import Education from "./Education";
import Eduonline from "./Eduonline";
import CvLayout from "./CvLayout";
import axios from "axios";
import appVersion from '../../version.json';

export default function Index(props) {
	const [listJobs, setListJobs] = useState([]);
	const [listEducation, setListEducation] = useState([]);
	const [listEduonline, setListEduonline] = useState([]);
	const [errorlog, setErrorlog] = useState("");
	const { env } = props;

	useEffect(() => {
		axios
			.get(
				`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Jobs/lists.json?v=${appVersion.version}`
			)
			.then(function (response) {
				// handle success
				let res = response.data;
				setListJobs(res);
				setErrorlog();
			})
			.catch(function (error) {
				// handle error
				setErrorlog(JSON.stringify(error));
				console.error(error);
				setListJobs([]);
			});
		axios
			.get(
				`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Education/lists.json?v=${appVersion.version}`
			)
			.then(function (response) {
				// handle success
				let res = response.data;
				setListEducation(res);
				setErrorlog();
			})
			.catch(function (error) {
				// handle error
				setErrorlog(JSON.stringify(error));
				console.error(error);
				setListEducation([]);
			});
		axios
			.get(
				`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Education/eduonline.json?v=${appVersion.version}`
			)
			.then(function (response) {
				// handle success
				let res = response.data;
				setListEduonline(res);
				setErrorlog();
			})
			.catch(function (error) {
				// handle error
				setErrorlog(JSON.stringify(error));
				console.error(error);
				setListEduonline([]);
			});
	}, []);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<CvLayout
							{...props}
							listJobs={listJobs}
							listEducation={listEducation}
							listEduonline={listEduonline}
						/>
					}
				>
					<Route
						index
						element={
							<Home
								{...props}
								listJobs={listJobs}
								listEducation={listEducation}
								listEduonline={listEduonline}
							/>
						}
					/>
					<Route
						path="jobs/:work"
						element={<Jobs {...props} list={listJobs} />}
					/>
					<Route
						path="jobs/:work/:subwork"
						element={<SubJobs {...props} list={listJobs} />}
					/>
					<Route
						path="education/:edu"
						element={<Education {...props} list={listEducation} />}
					/>
					<Route
						path="eduonline/:edu"
						element={<Eduonline {...props} list={listEduonline} />}
					/>
				</Route>
			</Routes>
			{env ? <pre>{errorlog}</pre> : ""}
		</>
	);
}
