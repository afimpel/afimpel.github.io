import React from "react";

import { Grid, Icon, Chip, Typography, Divider } from "@mui/material";


export default function CodeUses(props) {
    const { listCode, lang } = props;

    let languaje = Object.keys(listCode);
    console.log('languaje', languaje)
    if (languaje.length > 0) {
        return (<>
            <Divider item xs sx={{ width: "100%", my: 1 }} />

            <Typography variant="code" gutterBottom component="pre" wrap="nowrap" sx={{ textAlign: "center" }}>
                {lang.cv.codeUses}
            </Typography>

            <Grid
                container
                item
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                {
                    languaje.map(function (key, index) {
                        return (<Chip
                            item
                            key={index}
                            sx={{ px: 3 }}
                            icon={<Icon>{key}</Icon>}
                            label={listCode[key]}
                        />)
                    })
                }
            </Grid></>);
    } else {
        return (<></>)
    }
}
