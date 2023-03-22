import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-900 bg-cover bg-center">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
