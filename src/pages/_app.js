import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="bg-green-400 bg-cover bg-center">
        <Component {...pageProps} />
      </div>
    </>
  );
}
