import React, { useState } from "react";
import { useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LinkButton from "./LinkButton";
import { Icon, Divider } from "@mui/material";

export default function ListColapse(props) {
	const theme = useTheme();
	const {
		list,
		to,
		primary,
		lengthText,
		noClose,
		iconDefault,
		close,
		disabled,
	} = props;
	const [open, setOpen] = useState(!close);
	const fnSetOpen = (open, noClose) => {
		if (!noClose) {
			setOpen(open);
		}
	};

	return (
		<>
			<Box>
				<ListItemButton
					alignItems="flex-start"
					onClick={() => fnSetOpen(!open, noClose)}
					sx={{
						px: 3,
						pt: 2.5,
						pb: open ? 0 : 2.5,
						"&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
					}}
				>
					<ListItemText
						primary={primary + ": [ " + list.length + lengthText + " ]"}
						primaryTypographyProps={{
							fontSize: 15,
							fontWeight: "medium",
							lineHeight: "20px",
							mb: "2px",
						}}
						secondary={
							<>
								{list
									.map((y) => {
										return y.name;
									})
									.join(", ")}
							</>
						}
						title={
							"[ " +
							list.length +
							lengthText +
							" ]: " +
							list
								.map((y) => {
									return y.name;
								})
								.join(", ")
						}
						secondaryTypographyProps={{
							noWrap: true,
							fontSize: 10,
							color: open
								? "transparent"
								: alpha(theme.palette.primary.main, 0.7),
						}}
						sx={{ my: 0 }}
					/>
					<KeyboardArrowDown
						sx={{
							mr: -1,
							opacity: 0,
							transform: open ? "rotate(-180deg)" : "rotate(0)",
							transition: "0.2s",
						}}
					/>
				</ListItemButton>
				<Divider />
				{open &&
					list.map((item, id) => (
						<LinkButton
							key={id * 2}
							to={to + item.link}
							alternative={to + item.link + "/*"}
							iconSRC={
								<Icon>{iconDefault === "" ? item.icons : iconDefault}</Icon>
							}
							icons={true}
							type="list"
							disabled={disabled}
							primary={item.name}
							dense
							primaryTypographyProps={{
								fontSize: 14,
								fontWeight: "medium",
							}}
						/>
					))}
			</Box>
		</>
	);
}
ListColapse.defaultProps = {
	lengthText: "",
	iconDefault: "",
	noClose: false,
	close: false,
	disabled: false,
};
