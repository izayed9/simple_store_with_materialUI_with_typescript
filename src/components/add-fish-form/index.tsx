import { Button, Grid, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  formBorder: {
    border: "1px solid #000",
  },
});


const AddFishForm = (props: { addFish: any; }): JSX.Element => {
  const classes = useStyles();
  const {addFish} = props
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  // const [fish, setFish] = React.useState([]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      price: { value: number };
      status: { value: string };
      desc: { value: string };
      image: { value: string };
    };
    const name = target.name.value; // typechecks!
    const price = target.price.value;
    const status = target.status.value;
    const desc = target.desc.value;
    const image = target.image.value;
    const fish = {
      id:Date.now().toString(),
      name,
      price,
      status,
      desc,
      image,
    }

    addFish(fish)
    // target.reset()

  }

  return(
    <>
      <Grid container className={classes.formBorder}>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item md={4} >
              <TextField label="Name" name="name" fullWidth />
            </Grid>
            <Grid item md={4}>
              <TextField label="Price" name="price" fullWidth/>
            </Grid>
            <Grid item md={4}>
                <TextField
                  select
                  label="Select"
                  value={currency}
                  onChange={handleChange}
                name="status"
                fullWidth

                >
                <MenuItem  value="available">Fresh!</MenuItem>
                <MenuItem  value="available">Sold Out!</MenuItem>
              </TextField>
            </Grid>
            <Grid item md={12}>
              <TextField label="Desc" name="desc" fullWidth/>
            </Grid>
            <Grid item md={12}>
              <TextField label="Image" name="image" fullWidth />
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Button type="submit" variant="outlined" color="primary" fullWidth>
            + Add Fish
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
)
};

export default AddFishForm;
