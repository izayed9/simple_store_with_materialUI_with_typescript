import { Container, Grid, List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { colors } from "theme";
import { FishType } from "types/types";
import { useAtom } from "jotai";
import { orderAtom } from "atoms";
import samplefishes from "utils/sample-fishes"
import Order from "components/order";
import Inventory from "components/inventory";
import Fish from "components/fish";



const useStyles = makeStyles({
  wrapper: {
    border: `1px solid ${colors.black}`,
    padding:"6px"

  },
  boxWraper: {
    border: `1px solid ${colors.black}`,
    boxSizing:'border-box',
  },
  top: {
    textAlign: "center",

  },
  ofThe: {
    fontSize: "3rem",
    color: "#f5a623",
    padding: "0 1rem",
  },
  of: {
    paddingRight: "2rem",
    position: "relative",
    right: "-0.5rem",
  },
  bottomBorder: {
    borderBottom: `1px solid ${colors.black}`
  },


})

const FishStore = () => {
  const classes = useStyles();

  const[order, setOrder] = useAtom(orderAtom)

    const [fishes, setFishes] = React.useState<FishType[]>([]);

    const addfish = (fish: any) => {
        console.log('adding a fish')
        setFishes([...fishes, fish])
    }
    const loadSampleFishes = () => {
        // alert('loading fishes')
        // console.log('lodaing sample fish')
        setFishes(samplefishes)
        console.log('sample fishes',fishes)

        // console.log('loadsampleFihs',fishes)
    }

    const addToOrder = (key:string|number) => {
        const newOrder = {...order}
        newOrder[key] = newOrder[key] + 1 || 1
        console.log('new order',newOrder)
        setOrder(newOrder)
    }



  return <Container maxWidth="xl">
    <Grid container className={classes.wrapper} >
      <Grid item md={5} className={classes.boxWraper}>
        <Grid container spacing={2}>
          <Grid md={12} item className={classes.top}>
            <Typography variant="h1" gutterBottom>
                Catch
                <span className={classes.ofThe}>
                  <span className={classes.of}>Of</span>
                  <span className="the">The</span>
                </span>
                Day
             </Typography>
            <Typography variant="h5" gutterBottom className={classes.bottomBorder}>
               FRESS SEE FOODMARKET
             </Typography>
          </Grid>
          <Grid item md={12}>
            <List>
            {fishes.map((fish: any) => <Fish key={fish.id} details={fish} addToOrder={addToOrder} />)}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} className={classes.boxWraper}>
        <Order fishes={fishes} order={order} />
      </Grid>
      <Grid item md={4} className={classes.boxWraper}>
         <Inventory addFish={addfish} loadSamplefishes={loadSampleFishes} />
      </Grid>
    </Grid>
  </Container>;
};

export default FishStore;
