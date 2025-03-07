import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { MessageProvider } from "./components/MessageProvider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import Newsletter from "./pages/newsletter";
import Donations from "./pages/donations";
import Events from "./pages/events";
import About from "./pages/about";
import EventsAPI from "./pages/eventsAPI";
import Login from "./components/login";
import PrayerAPI from "./components/prayerAPI";
import APIs from "./pages/apis";
import Shop from "./pages/shop";
import Cart from "./components/cart";
import ShopComponent from "./components/shopComponent";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/shop" element={<Shop />} />     */}
          <Route path="/shop" element={<ShopComponent />} />    
          <Route path="/cart" element={<Cart /> } />      
          <Route path="/login" element={<Login />} />
          <Route path="/adminRoutes" element={<APIs />} />          
          <Route path='/addEvents' element={<EventsAPI /> } />
          <Route path='/addPrayers' element={<PrayerAPI /> } />
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
  );
}

export default App;
