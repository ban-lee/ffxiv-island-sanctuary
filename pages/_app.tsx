import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'styles/globals.scss';
import 'styles/colors.scss';
import 'styles/scrollbar.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            components: {
              Badge: {
                styles: {
                  root: {
                    fontWeight: 'normal',
                    textTransform: 'none',
                  },
                },
              },
            },
          }}>
        <ModalsProvider>
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp
