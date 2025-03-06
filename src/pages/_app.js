import { CartProvider } from '../context/CartContext';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <title>Bloom Valley Nursery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp; 