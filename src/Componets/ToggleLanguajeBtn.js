import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { GlobalContext } from "../GlobalMode";

export default function ToggleLanguajeBtn() {
	const GlobalData = React.useContext(GlobalContext);
	const [alignment, setAlignment] = React.useState(
		GlobalData.getLanguajeCurrent
	);

	const handleChange = (event, newAlignment) => {
		if (newAlignment !== null) {
			setAlignment(newAlignment);
			GlobalData.toggleLanguaje();
		}
	};

	const control = {
		value: alignment,
		onChange: handleChange,
		exclusive: true,
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<ToggleButtonGroup size="small" {...control} sx={{ width: 230 }}>
				<ToggleButton value="es" key="es" sx={{ width: 1 / 2 }} title="Español">
					ES
				</ToggleButton>
				<ToggleButton value="en" key="en" sx={{ width: 1 / 2 }} title="English">
					EN
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}
