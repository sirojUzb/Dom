import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";
import PhoneNumber from "./pages/contact/phone-number";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="phone-number" element={<PhoneNumber />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// from minute 24
