import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // fix hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return mounted ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : null;
}

export default MyApp;
