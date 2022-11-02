import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

const Layout = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2C3639" />
        <meta
          name="description"
          content="Welcome to Julien Henry's portfolio, a french front end developer."
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Julien Henry" />
        <meta
          property="og:description"
          content="Welcome to Julien Henry's portfolio, a french front end developer."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/images/favicon.ico"
        />

        <title>Julien Henry</title>
      </Head>

      <div
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Header />
        <Container component="main" sx={{ maxWidth: "1920px" }}>
          {children}
        </Container>
      </div>
    </>
  );
};

export default Layout;
