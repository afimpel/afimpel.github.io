import React from "react";
import { MenuItem, Button, IconButton } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import {
	Link as RouterLink,
	useMatch,
	useResolvedPath,
} from "react-router-dom";

export default function LinkButton(props) {
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
		disabled,
		...rest
	} = props;

	let url = `${to}`.split(":");
	let match = false;
	let resolvedTO = useResolvedPath(url[url.length - 1]);
	let matchTO = useMatch({ path: resolvedTO.pathname, end: true });
	let resolved = useResolvedPath(alternative);
	let matchALT = useMatch({ path: resolved.pathname, end: true });
	match = matchTO ? matchTO : matchALT;
	match = match ? true : false;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef((itemProps, ref) => (
				<RouterLink
					to={url[url.length - 1]}
					target={target}
					ref={ref}
					{...itemProps}
				/>
			)),
		[url, target]
	);
	switch (props.type) {
		case "menu":
			return (
				<MenuItem {...rest} component={renderLink} title={primary}>
					{children}
				</MenuItem>
			);
		case "list":
			return (
				<ListItem
					disabled={disabled}
					selected={match}
					button
					key={primary}
					component={renderLink}
					title={primary}
					{...rest}
				>
					{icons ? <ListItemIcon {...rest}>{iconSRC}</ListItemIcon> : ""}
					<ListItemText primary={primary} secondary={secondary} {...rest} />
				</ListItem>
			);
		default:
			if (icons) {
				return (
					<IconButton {...rest} component={renderLink} title={primary}>
						{children}
					</IconButton>
				);
			} else {
				return (
					<Button {...rest} component={renderLink} title={primary}>
						{children}
					</Button>
				);
			}
	}
}

LinkButton.defaultProps = {
	icons: false,
	iconSRC: "",
	target: "_self",
	type: "button",
	primary: "",
	secondary: "",
	alternative: "",
	disabled: false,
};
LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	target: PropTypes.string,
};
