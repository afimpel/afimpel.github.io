import React from "react";
import Icon from "@mui/material/Icon";
import { GitHub } from "@mui/icons-material";

export default function Page(lang) {
	return [
		{
			key: 1,
			title: lang.home,
			links: "home",
			alternative: "",
			icon: <Icon>home</Icon>,
			path: "home",
			pages: "Home",
		},
		{
			key: 2,
			title: lang.cv.title,
			links: "cv",
			alternative: "cv/*",
			path: "/cv/*",
			icon: <Icon>contact_page</Icon>,
			pages: "CV/",
		},
		{
			key: 3,
			title: lang.git.title,
			links: "github",
			alternative: "github/*",
			path: "github/*",
			icon: <GitHub />,
			pages: "GitHub/",
		},
	];
}
