import { Grid,Typography } from "@mui/material";
import React from "react";

const MotoIntro = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography variant="h2" my={3}>
                Hey buddies
                </Typography>
                <Typography variant="body1" my={2} align="justify">
                    On this website, we explore tutorials and techniques that help us have a more productive and interesting coder life. In the last section of this home page, I also share a summary of interesting non-fiction books that I had read, if you're interested, just give it a try. I weekly share technicals articles, so if you don't want to miss them, signup below and join a growing community of friendly readers.
                </Typography>
            </Grid>
        </Grid>
    )
}


export default MotoIntro;



