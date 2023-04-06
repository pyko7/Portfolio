import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Icons from "./Icons";

const Layout = ({ children }: { children?: ReactNode }) => {
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

      <div className="relative w-full h-screen bg-main-bg-color text-main-font-color">
        <Header />
        <div className="absolute left-[10%] -ml-[15px] top-[70%] z-[51] lg:left-[15%] lg:-ml-3 md:hidden">
          <Icons />
        </div>
        <main className="w-full h-full flex items-center justify-center py-20">
          <section className="w-4/5 h-full py-10 lg:w-[70%] sm:w-full">
            {children}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
