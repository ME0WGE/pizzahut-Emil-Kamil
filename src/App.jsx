import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout/customize/PIZZA/:pizzaId"
          element={<Customize />}
        />
        <Route path="/checkout/recap" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
        {/* Route 404 pour gérer les URLs non valides */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
