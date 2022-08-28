import React from "react";
import AddFishForm from "components/add-fish-form";
import { Grid, Typography } from "@mui/material";

const Inventory: React.FC = (props:any) => {
    const {addFish, loadSamplefishes} = props;
    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <Typography variant="h2" align="center" gutterBottom>
                  Inventory
                </Typography>
            </Grid>
            <Grid item md={12}>
                <AddFishForm addFish={addFish} />
            </Grid>
            <Grid item>
                <button onClick={loadSamplefishes}>load fishes</button>
            </Grid>
            {/* <h1>Inventory</h1>
            <AddFishForm addFish={addFish} /> */}
        </Grid>
    );
}

export default Inventory;