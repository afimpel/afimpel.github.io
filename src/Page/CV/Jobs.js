import React from "react";
import { useParams } from "react-router-dom";
import ReadMD from "../../Componets/ReadMD";
import Typography from "@mui/material/Typography";
import HeaderCV from "./HeaderCV";
import { Grid, Icon, Chip, Paper, Divider } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DoorBackIcon from "@mui/icons-material/DoorBack";
import { LocationOn, Work, LockClock } from "@mui/icons-material";
import ListColapse from "../../Componets/ListColapse";
import CodeUses from "./CodeUses";

export default function Jobs(props) {
	const { lang, env, list } = props;
	//console.log("props", props);
	let { work } = useParams();
	let listjobsOBJ = list.find((i) => i.link === work);

	const entry_event = new Date(listjobsOBJ.entry);
	const egress_event = new Date(listjobsOBJ.egress);
	const options = {
		year: "numeric",
		month: "short",
	};
	let entryDate = entry_event.toLocaleDateString(lang.type, options);
	let egressDate = egress_event.toLocaleDateString(lang.type, options);
	//console.log("entryDate", entryDate);
	//console.log("egressDate", egressDate);
	return (
		/*		<ReadMD
		env={env}
		file={`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Jobs/${work}`}
	/>*/
		<>
			<HeaderCV {...props} min={true} />
			<Paper
				sx={{
					p: 2,
					mx: 1,
					mt: 1,
					mb: 2,
					flexGrow: 1,
					borderRadius: 3,
					boxShadow: 5,
					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
				}}
			>
				<Grid container spacing={1} columns={16}>
					<Grid
						item
						xs={2}
						sx={{ p: "auto", textAlign: "center", verticalAlign: "center" }}
					>
						<Icon sx={{ fontSize: "76px !important;" }}>
							{listjobsOBJ.icons}
						</Icon>
					</Grid>
					<Grid item xs sx={{ p: "auto", textAlign: "center" }}>
						<Typography
							variant="h2"
							fontWeight={700}
							component="h2"
							sx={{ my: 0, mx: 0, textAlign: "center" }}
						>
							{listjobsOBJ.name}
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ p: "auto", textAlign: "center" }}>
						<Chip sx={{ px: 3 }} icon={<MeetingRoomIcon />} label={entryDate} />
						{!listjobsOBJ.actuality ? (
							<Chip
								sx={{ px: 3, mt: 1 }}
								icon={<DoorBackIcon />}
								label={egressDate}
							/>
						) : (
							<></>
						)}
					</Grid>
				</Grid>
				<Divider item xs sx={{ width: "100%", my: 1 }} />
				<Grid
					container
					item
					direction="row"
					justifyContent="space-around"
					alignItems="center"
				>
					<Chip
						item
						sx={{ px: 3 }}
						icon={<LockClock />}
						label={listjobsOBJ.type}
					/>
					<Chip
						item
						sx={{ px: 3 }}
						icon={<Work />}
						label={listjobsOBJ.jobs}
					/>
					<Chip
						item
						sx={{ px: 3 }}
						icon={<LocationOn />}
						label={listjobsOBJ.city}
					/>
				</Grid>
				<ReadMD
					sx={{ p: 0 }}
					replaceList={[
						{ origen: "changeMe", replace: new Date().getFullYear() - 2004 },
					]}
					env={env}
					file={`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Jobs/${listjobsOBJ.filename}`}
				/>
				{listjobsOBJ.works ? (
					<ListColapse
						list={listjobsOBJ.works}
						to={`/cv/jobs/${work}/`}
						primary={lang.cv.Jobs}
					/>
				) : (
					""
				)}
				<CodeUses listCode={listjobsOBJ.languaje} {...props}  />
			</Paper>
			{env ? (<>
				<Typography variant="code" gutterBottom component="pre" wrap="nowrap">
					{work} - {env}
				</Typography>
				<hr />
				<Typography variant="code" gutterBottom component="pre" wrap="nowrap">
					{JSON.stringify(
						list.find((i) => i.link === work),
						" ",
						" "
					)}
				</Typography>
			</>
			) : (
				""
			)}
		</>
	);
}
