import React from "react";
import { MenuItem, Button, IconButton, Badge, Chip } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
//import { Link as RouterLink } from "react-router-dom";

export default function LinkButtonPublic(props) {
	const {
		children,
		primary,
		secondary,
		to,
		alternative,
		target,
		type,
		icons,
		iconSRC,
		badgeContent,
		...rest
	} = props;

	const ln = (to) => {
		//alert(to);
		//let url = `https:${to}`.split(":");
		window.open(to, "_blank");
	};

	switch (props.type) {
		case "menu":
			return (
				<MenuItem {...rest} onClick={() => ln(to)} title={primary}>
					{children}
				</MenuItem>
			);
		case "list":
			return (
				<ListItem
					button
					key={primary}
					onClick={() => ln(to)}
					title={primary}
					{...rest}
				>
					{icons ? <ListItemIcon {...rest}>{iconSRC}</ListItemIcon> : ""}
					<ListItemText primary={primary} secondary={secondary} {...rest} />
				</ListItem>
			);
		case "chip":
			return (
				<Chip
					item
					button
					key={primary}
					onClick={() => ln(to)}
					title={primary}
					{...rest}
					icon={iconSRC}
					label={children}
				/>
			);
		case "badge":
			return (
				<IconButton {...rest} onClick={() => ln(to)} title={primary}>
					<Badge
						badgeContent={badgeContent}
						overlap="circular"
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					>
						{children}
					</Badge>
				</IconButton>
			);

		default:
			if (icons) {
				return (
					<IconButton {...rest} onClick={() => ln(to)} title={primary}>
						{children}
					</IconButton>
				);
			} else {
				return (
					<Button {...rest} onClick={() => ln(to)} title={primary}>
						{children}
					</Button>
				);
			}
	}
}

LinkButtonPublic.defaultProps = {
	icons: false,
	iconSRC: "",
	target: "_self",
	type: "button",
	primary: "",
	secondary: "",
	badgeContent: "",
};
LinkButtonPublic.propTypes = {
	to: PropTypes.string.isRequired,
	target: PropTypes.string,
};
