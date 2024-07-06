import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dogs from "./pages/Dogs/Dogs";
import DonatePage from "./pages/DonatePage/DonatePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/donate" element={<DonatePage />} />
    </Routes>
  );
};

export default App;
