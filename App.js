import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm install react-route-dom
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// ROUTING PAGES
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
