import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";
import {theme, colors} from 'theme';
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import {getFunName} from 'utils'

const useStyles = makeStyles({
    storeSelector: {
        background: colors.white,
        maxWidth: '500px',
        margin: "50px auto",
        padding: "1rem",
        border: `2px double ${colors.black}`,
    },
    storeSelectorInput: {
        width: '100%',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    },

});

const StorePicker = () => {
    const classes = useStyles();
    const router = useRouter()
    // const [name, setName] = useState(null)
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        // setName(e.target.name.value )
        const target = e.target as typeof e.target & {
          name: { value: string };

        };

        router.push({
            pathname: '/fish-store/[slug]',
            query: { slug: target.name.value } },
          )
        console.log("Name",name);
    //    setFormData({...formData, [e.target.name]:(e.target.name.value)})
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <Grid container  direction="column" alignItems="center"
            justifyContent="center" className={classes.storeSelector}>
            <Grid item md={12}>
                <Typography variant="h2" my={3}>Please select a store</Typography>
            </Grid>
            <Grid item md={12} className={classes.storeSelectorInput}>
                <TextField fullWidth label="Store" variant="outlined" name="name" defaultValue={getFunName()}  />
            </Grid>
            <Grid item md={12} >
                <Button variant="outlined" color="primary" type="submit" fullWidth>
                    Visit Store →
                </Button>
            </Grid>
      </Grid>
        </form>
    );
  }


export default StorePicker;