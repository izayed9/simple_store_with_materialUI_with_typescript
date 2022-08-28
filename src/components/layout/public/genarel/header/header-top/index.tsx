import { AppBar, Container, Grid, useMediaQuery, Typography, TextField,IconButton, InputAdornment } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import React, { ElementType } from 'react';
import { theme, colors } from 'theme';
import NavMenu from '../../navbar/navmenu/nav-menu';
import SmallScreenNav from '../../navbar/small-screen-nav';
import SocialMedia from '../../navbar/social-media';
import BottomNavMenu from '../../navbar/bottom-navbar-menu/bottom-nav-menu';


const useStyles = makeStyles(() =>
  createStyles({
    appbar: {
      // backgroundColor: colors.white,
      boxShadow: 'none',
      // borderBottom: `1px solid ${colors.primary.main}`,
      padding: '10px 0 40px 0',
      backgroundColor:'#80808052',

    },
    alignRight: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    searchAlagin: {
      marginRight:"20px"
    }
  })
);


const HeaderTop = () => {
  const classes = useStyles();
  const isSmScreen = useMediaQuery(theme.breakpoints.down(960));

  return (
    <AppBar position="sticky" color="transparent" className={classes.appbar}>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          spacing={5}
          flexWrap="nowrap"
        >
          <Grid item>
             <SocialMedia />
          </Grid>
          <Grid
            item
            flexGrow={isSmScreen ? 0 : 1}
            className={classes.alignRight}
          >
            {isSmScreen ? <SmallScreenNav /> : <NavMenu />}
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="flex-end"
          spacing={5}
          flexWrap="nowrap"
        >
          {/* <Grid item>
            <Typography variant="h1" color="inherit" noWrap className={classes.leftAlagin}>
                _Qubehash
            </Typography>
          </Grid> */}
          <Grid
            item
            flexGrow={isSmScreen ? 0 : 1}
            className={classes.alignRight}
          >
            <TextField
              label="With normal TextField"
              className={classes.searchAlagin}
              variant="standard"
              InputProps={{
                  endAdornment:(
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
            />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default HeaderTop;
