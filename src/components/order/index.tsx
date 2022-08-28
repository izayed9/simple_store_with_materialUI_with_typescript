import { formatPrice } from "utils";
import React from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  borderBottomTotal: {
    borderTop: "3px double #000",
    marginTop:"10px"
  }
})

const Order: React.FC = (props: any) => {
  const classes = useStyles()
    const { fishes, order } = props;
    const orderIds = Object.keys(order);

    const findFish = (id:string) => {
        return fishes.find((fish: any) => fish.id === id);
    }

    const total = orderIds.reduce((total: any, id: any) => {
        const fish = findFish(id);
        // console.log('fish test', fish)
        const isAvailable = fish && fish.status === "available";
        if (isAvailable) {
            return total + (order[id] * fish.price);
        }
        return total;

    }, 0);


    const data = Object.entries(order).map(([key, value]) => {
        const fish = findFish(key);
        console.log('fish', fish)
      const count = value;
      if (!fish) return null;
        const isAvailable = fish && fish.status === "available";
        if (!isAvailable) {
            return (
              <ListItem key={key}>
                Sorry {fish ? fish.name : "fish"} is no longer available
              </ListItem>
            );
        } else {
          return (
            <ListItem key={key}>
              <Grid container>
                <Grid item md={10}>
                  <Typography variant="h5">
                   {count} lbs {fish.name}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography variant="h4">
                    {formatPrice(count * fish.price)}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          );
          }

    })


    return (
        <Grid container justifyContent="space-between" spacing={2}>
            <Grid item md={12}>
              <Typography variant="h2" align="center" gutterBottom>
                  Your Order
              </Typography>
            </Grid>
            <Grid item>
               <List>
                {data}
              </List>
            </Grid>
        <Grid item md={12}>
          <List>
            <ListItem >
              <Grid container className={classes.borderBottomTotal}>
                <Grid item md={8} >
                  <Typography variant="h3">
                    Total:
                  </Typography>
                </Grid>
                <Grid item md={4} >
                  <Typography variant="h3">
                    {formatPrice(total)}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            </List>
        </Grid>
      </Grid>
    );
}

export default Order;
