import { Drawer, IconButton } from "@mui/material";
import React, {useState, useCallback } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from "./navmenu/nav-menu";
import {theme, colors } from 'theme'
import { makeStyles } from "@mui/styles";
import BottomNavMenu from "./bottom-navbar-menu/bottom-nav-menu";


const useStyles = makeStyles({
    icon: {
      color: colors.black,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    drawer: {
      padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
    },
    logo: {
      display: 'block',
      padding: '8px 0',
    },
  });

const SmallScreenNav = () => {
    const classes = useStyles();
    const [openNav, setOpenNav] = useState(false);

    const closeNav = () => {
        setOpenNav(false);
      };

      const NavToggle = useCallback(() => {
        setOpenNav(!openNav);
      }, [openNav, setOpenNav]);

    return <div>
        <Drawer
            open={openNav}
            onClose={closeNav}
        >
            <NavMenu isVerticalMenu onCloseNav={closeNav} />
            <BottomNavMenu isVerticalMenu />
        </Drawer>
        <IconButton onClick={NavToggle}>
           <MenuIcon />
        </IconButton>
  </div>;
};

export default SmallScreenNav;
