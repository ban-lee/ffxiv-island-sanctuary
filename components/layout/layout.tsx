import Head from 'next/head';
import { createStyles, Divider, Group, ScrollArea, Text } from '@mantine/core';

const useStyles = createStyles(() => ({
  footer: {
    margin: '0 16px',
    padding: 16,
  },
}));

interface LayoutProps {
  title: string;
  description: string;
};

const GITHUB_URL = 'https://github.com/ban-lee/ffxiv-island-sanctuary';
const ISLAND_SANCTUARY_SHEET_URL =
    `https://docs.google.com/spreadsheets/d/1e5dyaHSt5lj25l3nFWO5QcPmAJ2aAoPxCWj-iZnKxRk/edit#gid=1283864903`;

export function Layout({ children, layoutProps }: { children: React.ReactNode, layoutProps: LayoutProps }) {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>{layoutProps.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={layoutProps.description} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ScrollArea sx={{height: '100vh'}}>
        <main>
          {children}
        </main>
        <footer className={classes.footer}>
          <Divider pb={16} />
          <Group grow align="center" noWrap>
            <Text size="sm">
              2022 © <a href={GITHUB_URL}>Ban Lee</a>
            </Text>
            <Text size="sm" align="right">
              Built with Nekkowe&apos;s permission to use the data <br />
              from their&nbsp;
              <a href={ISLAND_SANCTUARY_SHEET_URL} target="_blank" rel="noreferrer">
                Island Sanctuary Workshop Sheet
              </a>!
            </Text>
          </Group>
        </footer>
      </ScrollArea>
    </>
  );
}
