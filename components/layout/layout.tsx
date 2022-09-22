import Head from 'next/head';
import styles from './layout.module.scss';

export interface LayoutProps {
  title: string;
  description: string;
};

const GITHUB_URL = 'https://github.com/ban-lee/ffxiv-island-sanctuary';
const ISLAND_SANCTUARY_SHEET_URL =
    `https://docs.google.com/spreadsheets/d/1e5dyaHSt5lj25l3nFWO5QcPmAJ2aAoPxCWj-iZnKxRk/edit#gid=1283864903`;

export function Layout({ children, layoutProps }: { children: React.ReactNode, layoutProps: LayoutProps }) {
  return (
    <>
      <Head>
        <title>{layoutProps.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={layoutProps.description} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <main>
        {children}
      </main>
      <footer>
        <div className={styles['footer']}>
          <div>
            2022 © <a href={GITHUB_URL}>Ban Lee</a>
          </div>
          <div className={styles['credit']}>
            Built with Nekkowe&apos;s permission to use the data <br />
            from their&nbsp;
            <a href={ISLAND_SANCTUARY_SHEET_URL} target="_blank" rel="noreferrer">
              Island Sanctuary Workshop Sheet
            </a>!
          </div>
        </div>
      </footer>
    </>
  );
}
