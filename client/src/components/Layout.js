import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ children }) => {
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
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />

        <title>Julien Henry</title>
      </Head>

      <div className="bg-primary">
        <Header />
        <main className="w-full max-w-[1920px] min-h-screen my-0 mx-auto flex flex-col justify-center items-center  text-secondary md:items-start">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
