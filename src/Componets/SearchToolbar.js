import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "30ch",
			},
		},
	},
}));

export default function SearchToolbar(props) {
	const { click, change, lang } = props;

	const [value, setValue] = React.useState("");

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon onClick={click} />
			</SearchIconWrapper>
			<StyledInputBase
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
					if (e.target.value.length > 3) {
						change(e.target.value);
					}
				}}
				placeholder={lang.search}
				inputProps={{ "aria-label": "search" }}
			/>
		</Search>
	);
}
SearchToolbar.defaultProps = {
	change: (change) => {
		console.log("change", change);
	},
	click: (click) => {
		console.log("click", click);
	},
};
