import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/ckeditor.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import React, {useEffect} from "react";


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
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
