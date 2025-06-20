import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout/customize/PIZZA/:id"
          element={<Customize/>}
        />
        <Route path="/checkout/recap" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
     
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
