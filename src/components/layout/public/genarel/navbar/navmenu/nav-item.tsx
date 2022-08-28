import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';
import cn from 'classnames';
import { startsWith } from 'lodash-es';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { theme, colors } from 'theme';

export interface IProps {
    children?: React.ReactNode;
  name: string;
  route: string | Function;
  matcher?: string;
  isVerticalMenu?: boolean;
  signedUser?: boolean;
  persistLocation?: boolean;
  isBeta?: boolean;
}

const useStyles = makeStyles({
  link: {
        textTransform: 'capitalize',
      fontSize: '1.2rem',
    color: colors.black,
    padding: '8px 20px',
    width: '100%',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    '&:hover': {
      color: colors.primary.main,
    },
  },
  activeLink: {
    fontWeight: 'bold',
  },
  verticalMenu: {
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '6px 14px',
    width: '240px',
    borderRadius: '8px',
    marginBottom: theme.spacing(1),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      backgroundColor: alpha(colors.black, 0.08),
    },
  },
  verticalMenuActive: {
    backgroundColor: `${alpha(colors.black, 0.08)}`,
  },
  betaText: {
    color: colors.primary.main,
    marginLeft: '3px',
    fontSize: '12px',
  },
});

const NavItem: FC<IProps> = ({
  children,
  name,
  route,
  matcher,
  isVerticalMenu,
  signedUser,
  persistLocation,
  isBeta,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const { pathname } = router || { pathname: '' };
  const isActive = startsWith(pathname, matcher);
  const isLink = typeof route === 'string';

  const handleClick = () => {
    if (route && typeof route === 'function') {
      route();
    }
  };

  if (signedUser && !persistLocation) {
    return null;
  }
  return (
    <Link passHref href={isLink ? (route as string) : '#'}>
      <a
        onClick={handleClick}
        className={cn({
          [classes.link]: true,
          [classes.activeLink]: isActive && !isVerticalMenu,
          [classes.verticalMenu]: isVerticalMenu,
          [classes.verticalMenuActive]: isVerticalMenu && isActive,
        })}
      >
        {!isBeta ? (
          <>{children || name}</>
        ) : (
          <>
            {children || name}
            <sup className={classes.betaText}>Beta</sup>
          </>
        )}
      </a>
    </Link>
  );
};

export default NavItem;

