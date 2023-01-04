import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/ckeditor.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

export default MyApp;
