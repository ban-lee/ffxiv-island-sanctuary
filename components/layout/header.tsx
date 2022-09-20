import React from 'react';
import {
  createStyles,
  Group,
  Header as MantineHeader,
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
  const { classes } = useStyles();

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
                size={44}>
            <i className="icon bi-sun-fill"></i>
          </ThemeIcon>
        </div>
        <Title order={1} sx={{flex: '1 1 auto'}}>{title}</Title>
        <div>
          {children}
        </div>
      </MantineHeader>
      <div className="spacer2"></div>
    </>
  );
}
