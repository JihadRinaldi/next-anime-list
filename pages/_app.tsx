import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>アニメリスト</title>
      </Head>
      <div className="overflow-x-hidden">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default MyApp;
