import React from "react";
import { List, ListItem } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from "@mui/styles";
import { colors } from 'theme';
import { InstagramLogo } from 'phosphor-react';

const useStyles = makeStyles({
    list: {
        display: 'flex',
        padding: 0,

    },
    headersocialItem: {
        color: colors.black,
        // marginRight: '-15px',
        backgroundColor: "none",
        "&:hover": {
            color: colors.primary.main,
            backgroundColor: "transparent",
        },
    },
});



const SocialMedia = () => {
    const classes = useStyles();
    return <>
        <List className={classes.list}>
            <ListItem button component="a" href="https://www.google.com" className={classes.headersocialItem}>
                <GitHubIcon/>
            </ListItem>
            <ListItem button component="a" href="https://www.google.com" className={classes.headersocialItem}>
               <TwitterIcon/>
            </ListItem>
            <ListItem button component="a" href="https://www.google.com" className={classes.headersocialItem}>
                <InstagramIcon/>
            </ListItem>
           
       </List>
    </>
};

export default SocialMedia;
