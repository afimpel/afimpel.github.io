import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import HeaderCV from "./HeaderCV";
import { Grid, Icon, Chip, Paper, Divider } from "@mui/material";
import { School, Web } from "@mui/icons-material";
import LinkButtonPublic from "../../Componets/LinkButtonPublic";

export default function Eduonline(props) {
    const { lang, env, list } = props;
    //console.log("props", props);
    let { edu } = useParams();
    let listEduonline = list.find((i) => i.link === edu);
    return (
        /*		<ReadMD
        env={env}
        file={`https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Education/${edu}`}
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
                            {listEduonline.icons}
                        </Icon>
                    </Grid>
                    <Grid item xs sx={{ p: "auto", textAlign: "center" }}>
                        <Typography
                            variant="h2"
                            fontWeight={700}
                            component="h2"
                            sx={{ my: 0, mx: 0, textAlign: "center" }}
                        >
                            {listEduonline.name}
                        </Typography>
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
                        icon={<School />}
                        label={lang.cv.EducationOnline}
                    />
                    <LinkButtonPublic
                        to={listEduonline.url}
                        target="_blank"
                        iconSRC={<Web />}
                        type="chip"
                        icons={false}
                        sx={{ px: 3 }}
                    >
                        {listEduonline.name}
                    </LinkButtonPublic>

                </Grid>
                <Divider item xs sx={{ width: "100%", my: 1 }} />
                {listEduonline.courses && (
                    <>
                        {listEduonline.courses.map((item, id) => (
                            <LinkButtonPublic
                                key={id * 2}
                                to={item.url}
                                icons={true}
                                type="list"
                                iconSRC={
                                        <Icon>{item.icons}</Icon>
                                }
                                primary={item.name}
                                secondary={
                                    new Date(item.entry).toLocaleDateString(lang.type, {
                                        year: "numeric",
                                        month: "short",
                                    }) +
                                    " / " +
                                    (!item.actuality
                                        ? new Date(item.egress).toLocaleDateString(lang.type, {
                                            year: "numeric",
                                            month: "short",
                                        })
                                        : lang.cv.EducationActaulity)
                                }
                                dense
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "medium",
                                }}
                            />
                        ))}
                    </>
                )}
            </Paper>
            {env ? (<>
                <Typography variant="code" gutterBottom component="pre" wrap="nowrap">
                    {edu} - {env}
                </Typography>
                <hr />
                <Typography variant="code" gutterBottom component="pre" wrap="nowrap">
                    {JSON.stringify(
                        list.find((i) => i.link === edu),
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
