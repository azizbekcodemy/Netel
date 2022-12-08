import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import ResponsiveAppBar from "./companent/navbar";
import DrawerAppBar from "./companent/navbar";
import NavbarComponent from "./companent/navbar";
import About from "./pages/About/about";
import Portfol from "./pages/Portfol/portfol";
import Contact from "./pages/Contact/contact";
import "./index.css"



function App() {
  return (
    <>
    <div id="welcom">
      <BrowserRouter>
      <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/port" element={<Portfol />}/>
            <Route path="/con" element={<Contact />}/>


        
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
