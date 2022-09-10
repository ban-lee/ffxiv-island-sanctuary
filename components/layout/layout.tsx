import Chip from 'components/chip/chip';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from './layout.module.scss';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

type ToastColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'black';

export interface ToastConfig {
  isVisible: boolean;
  header?: JSX.Element;
  body?: JSX.Element;
  color?: ToastColor;
}

export interface LayoutProps {
  title: string;
  description: string;
  toastConfig?: ToastConfig;
};

function getBg(toastConfig: ToastConfig) {
  if (!toastConfig.color) return '';

  return `bg-${toastConfig.color}`;
}

const GITHUB_URL = 'https://github.com/ban-lee/ffxiv-island-sanctuary';
const ISLAND_SANCTUARY_SHEET_URL =
    `https://docs.google.com/spreadsheets/d/1e5dyaHSt5lj25l3nFWO5QcPmAJ2aAoPxCWj-iZnKxRk/edit#gid=1283864903`;

export default function Layout({ children, layoutProps }: { children: React.ReactNode, layoutProps: LayoutProps }) {
  const [toastConfig, setToastConfig] = useState<ToastConfig|undefined>(undefined);

  function closeToast() {
    setToastConfig({
      ...toastConfig,
      isVisible: false,
    });
  }

  useEffect(() => {
    setToastConfig(layoutProps.toastConfig);

  }, [layoutProps.toastConfig]);

  return (
    <>
      <Head>
        <title>{layoutProps.title}</title>
        <meta name="description" content={layoutProps.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      {toastConfig &&
        <div className={`${styles.toast} ${getBg(toastConfig)}`}>
          <Toast isOpen={!!toastConfig.isVisible}>
          {
            <ToastHeader toggle={closeToast}>
              {toastConfig.header}
            </ToastHeader>
          }
          {!!toastConfig.body &&
            <ToastBody>
              {toastConfig.body}
            </ToastBody>
          }
          </Toast>
        </div>
      }
      <footer>
        <div className={styles['footer']}>
          <div>
            2022 © <a href={GITHUB_URL}>Ban Lee</a>
          </div>
          <div>
            Created using data from Nekkowe&apos;s <a href={ISLAND_SANCTUARY_SHEET_URL}>
              Island Sanctuary Workshop Sheet</a>!
          </div>
        </div>
        <div className="d-flex gap-5">
          <Chip option={{value: "", text: "dark-blue", color: "dark-blue"}}></Chip>
          <Chip option={{value: "", text: "light-blue", color: "light-blue"}}></Chip>
          <Chip option={{value: "", text: "teal", color: "teal"}}></Chip>
          <Chip option={{value: "", text: "green", color: "green"}}></Chip>
          <Chip option={{value: "", text: "yellow", color: "yellow"}}></Chip>
          <Chip option={{value: "", text: "orange", color: "orange"}}></Chip>
          <Chip option={{value: "", text: "red", color: "red"}}></Chip>
          <Chip option={{value: "", text: "pink", color: "pink"}}></Chip>
          <Chip option={{value: "", text: "purple", color: "purple"}}></Chip>
          <Chip option={{value: "", text: "gray", color: "gray"}}></Chip>
        </div>
      </footer>
    </>
  );
}
