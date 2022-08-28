import { Dashboard } from '@mui/icons-material/';
import { List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import cn from 'classnames';




import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { theme, colors} from 'theme';

import NavItem from './nav-item';
import navMenuItems from './nav-menu-items';

interface IProps {
  isVerticalMenu?: boolean;
  onCloseNav?: () => void;
}

const useStyles = makeStyles({
  list: {
    padding: 0,
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  horizontal: {
    marginLeft: theme.spacing(4),
    display: 'inline-flex',
    alignItems: 'center',
  },
  item: {
    padding: 0,
  },
  userMenuItem: {
    color: colors.black,
    display: 'flex',
    cursor: 'pointer',
    padding: '8px 20px',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: colors.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '6px 14px',
    },
  },
  userHomeIcon: {
    width: '17px',
    height: '22px',
    marginRight: theme.spacing(0.3),
  },
  verticalItemColor: {
    fontWeight: 'bold',
  },
});

const NavMenu: FC<IProps> = ({ isVerticalMenu, onCloseNav }) => {
  const classes = useStyles();
  const router = useRouter();
  const { query } = router || { query: { params: [] } };
  let params = query.params as string[];


  return (
    <>
      <List
        className={cn({
          [classes.list]: true,
          [classes.horizontal]: !isVerticalMenu,
          [classes.vertical]: isVerticalMenu,
        })}
      >
        {navMenuItems.map((navItem) => {
          const { name, routeCallback, matcher, persistLocation } =
            navItem;
          return (
            <ListItem className={classes.item} key={name}>
              <NavItem
                isVerticalMenu={isVerticalMenu}
                matcher={matcher}
                name={name}
                route={routeCallback(params)}
                persistLocation={persistLocation}

              />
            </ListItem>
          );
        })}

      </List>
    </>
  );
};

export default NavMenu;
