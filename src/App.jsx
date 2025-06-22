import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Error from "./pages/Error";
import Layout from "./layout/Layout";
import PanierMobile from "./pages/PanierMobile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/customise/:id" element={<Customize />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/panier-mobile" element={<PanierMobile />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
