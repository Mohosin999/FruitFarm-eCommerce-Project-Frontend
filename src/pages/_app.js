import { StoreProvider } from "easy-peasy";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import store from "../store";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Navbar />
      <div className="bg-zinc-900 bg-cover bg-center">
        <Component {...pageProps} />
      </div>
      <Footer />
    </StoreProvider>
  );
}
