import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../src/Components/Navbar/Navbar";
import ContactUs from "../src/Components/Contact us/CoontactUs";
import BigCircle from "./Components/YchooseNeartax/BigCircle";

import HowWark from "./Components/Content/HowWork";
import OurCoreValue from "./Components/Content/OurCoreValue";
import Contact from "./Components/Content/Contact";
import Client from "./Components/Client/Client";
import About from "./Components/About/About";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="aboutUs" element={<About />} />

        </Routes>
      <BigCircle />
      <HowWark />
      <OurCoreValue />
      <Contact />
      <Client /> 
      
      </BrowserRouter>
    </div>
  );
}

export default App;
