import React, { useEffect, useState } from "react";
import { GlobalContext } from "../GlobalMode";

export default function ClockDigital() {
	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	const GlobalMode = React.useContext(GlobalContext);
	const [value, setValue] = useState(new Date());
	useEffect(() => {
		let vuelta = true;
		const interval = setInterval(() => {
			setValue(new Date());
			vuelta = GlobalMode.timeModeDark(new Date(), vuelta);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line
	}, []);

	let h = addZero(value.getHours());
	let m = addZero(value.getMinutes());
	let s = addZero(value.getSeconds());
	let time = h + ":" + m + ":" + s;
	return <b>{time}</b>;
}
