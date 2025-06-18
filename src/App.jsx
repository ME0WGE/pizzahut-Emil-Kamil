import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* Ready to code! */}
      {/* Script written by github.com/ME0WGE */}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
