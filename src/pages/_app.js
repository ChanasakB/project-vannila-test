import "@/styles/globals.css";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create a custom cache instance
const cache = createCache({ key: 'custom' });

function MyApp({ Component, pageProps }) {
  return (
    // Provide the custom cache to the app
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;