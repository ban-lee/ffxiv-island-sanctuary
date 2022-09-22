import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Header as MantineHeader,
  MediaQuery,
  ThemeIcon,
  Title,
  } from '@mantine/core';

interface HeaderProps {
  children?: React.ReactNode;
  title: string;
  homeRoute?: string;
}

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[6],
    color: theme.white,

    display: 'flex',
    alignItems: 'center',
    height: 56,
    padding: '0 8px',

    '> div': {
      marginRight: '8px',

      '&:last-child': {
        marginRight: 0,
      }
    }
  },
}));

export default function Header({children, title}: HeaderProps) {
  const isMobile = useMediaQuery('(max-width: 400px)');
  const { classes } = useStyles();

  const smallHeader = {
    fontSize: 24,
  };
  const mobileHeader = {
    fontSize: 20,
  };

  return (
    <>
      <MantineHeader height={56} className={classes.header}>
        <div>
          <ThemeIcon
                color="dark"
                sx={{
                  'i': {
                    fontSize: 20,
                    lineHeight: 20,
                  },
                }}
                size={isMobile ? 30 :  44}>
            <i className="icon bi-sun-fill"></i>
          </ThemeIcon>
        </div>
        <MediaQuery smallerThan={620} styles={isMobile ? mobileHeader : smallHeader}>
          <Title order={1} sx={{flex: '1 1 auto'}}>{title}</Title>
        </MediaQuery>
        <div>
          {children}
        </div>
      </MantineHeader>
      <div className="spacer2"></div>
    </>
  );
}
