import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import Newsletter from "./pages/newsletter";
import Donations from "./pages/donations";
import Events from "./pages/events";
import About from "./pages/about";
import ApiTest from "./components/apiTest"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/addEvents" element={<ApiTest />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
