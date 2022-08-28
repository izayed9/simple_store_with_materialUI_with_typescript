import { Grid,ListItem, Stack, Typography } from "@mui/material";
import {formatPrice} from 'utils'
import React from "react";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({

    bottomBorder:{
        borderBottom: '2px solid #000',
        borderTop: '1px solid #000',
    },
    fishImage: {
        maxWidth:'185px'
    }

})

const Fish:React.FC = (props: any) => {
    const classes= useStyles()
    const { name, price, image, desc,status } = props.details;
    const isAvailable = status === "available";
    const handleClick = () => {
        console.log('clicked')
        props.addToOrder(props.details.id);
    }
    return <ListItem>

        <Grid container className={classes.bottomBorder} >
            <Grid item md={5}>
              <img className={classes.fishImage} src={image} alt={name} />
            </Grid>
            <Grid item md={7}>
                <Grid container>
                    <Grid item md={12}>
                        <Stack direction="row"
                         justifyContent="space-between"
                         alignItems="center"
                         spacing={2}>
                        <Typography variant="h2" gutterBottom>
                        {name}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                        {formatPrice(price)}
                        </Typography>
                       </Stack>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" gutterBottom>
                        {desc}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <button
                        disabled={!isAvailable}
                        onClick={handleClick}
                        >
                            {isAvailable ? "Add to Order" : "Sold Out"}
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

  </ListItem>
 };

export default Fish
