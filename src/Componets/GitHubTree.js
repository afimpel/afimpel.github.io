import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import humanFileSize from "../Function/humanFileSize";
import { Paper, Divider } from "@mui/material";

import { Folder, UploadFile } from "@mui/icons-material";
export function makeTreeGitHub(o, folder) {
	let data = o.filter((i) => i.folder === folder);
	return data.map((_data) => {
		if (_data.type === "tree") {
			return {
				..._data,
				children: makeTreeGitHub(o, _data.path),
			};
		} else {
			return _data;
		}
	});
}

function StyledTreeItem(props) {
	const {
		bgColor,
		color,
		labelIcon: LabelIcon,
		labelInfo,
		labelText,
		...other
	} = props;

	return (
		<TreeItem
			label={
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						p: 0,
						m: 0,
						width: "100%",
					}}
				>
					<Box component={LabelIcon} sx={{ mr: 1 }} />
					<Typography
						variant="body2"
						sx={{ fontWeight: "inherit", flexGrow: 1 }}
					>
						{labelText}
					</Typography>
					<Typography variant="caption">{labelInfo}</Typography>
				</Box>
			}
			{...other}
		/>
	);
}

StyledTreeItem.propTypes = {
	bgColor: PropTypes.string,
	color: PropTypes.string,
	labelIcon: PropTypes.elementType.isRequired,
	labelInfo: PropTypes.string,
	labelText: PropTypes.string.isRequired,
};

const renderTree = (nodes) => {
	return (
		<StyledTreeItem
			key={nodes.id}
			nodeId={nodes.path}
			labelText={nodes.name}
			labelInfo={nodes.type === "tree" ? "" : humanFileSize(nodes.size, true)}
			labelIcon={nodes.type === "tree" ? Folder : UploadFile}
			sx={{ flexGrow: 1, overflowY: "auto" }}
		>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</StyledTreeItem>
	);
};

export default function GitHubTree(props) {
	const { repos, titles } = props;
	let lista = makeTreeGitHub(repos, "");

	return (
		<Paper
			sx={{ py: 2, margin: 2, flexGrow: 1, borderRadius: 3, boxShadow: 5 }}
		>
			<Typography component="h4" variant="h4" sx={{ mx: 5 }}>
				{titles}
			</Typography>
			<Divider sx={{ my: 1 }} />

			<TreeView
				aria-label="rich object"
				defaultCollapseIcon={<ArrowDropDownIcon />}
				defaultExpandIcon={<ArrowRightIcon />}
			>
				{lista.map((node) => renderTree(node))}
			</TreeView>
		</Paper>
	);
}
