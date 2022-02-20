import React, { useEffect, useState } from "react";
import { GlobalContext } from "../GlobalMode";
import Clock from "react-clock";
import "./ClockApp.css";

export default function ClockAnologue() {
	const GlobalMode = React.useContext(GlobalContext);
	const [value, setValue] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setValue(new Date());
			GlobalMode.timeModeDark(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line
	}, []);

	return <Clock size="64" value={value} />;
}
