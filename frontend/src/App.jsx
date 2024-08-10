import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dogs from "./pages/Dogs/Dogs";
import DonatePage from "./pages/DonatePage/DonatePage";
import MainTemplate from "./components/templates/MainTemplate/MainTemplate";

const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
