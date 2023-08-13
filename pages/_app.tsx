import "../src/App.css";

import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { theme } from "src/theme";

import AppLayout from "@/components/partials/layout/applayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}
