import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { APIContextProvider } from "./context/AllProducts";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./globals.css";
import ProductDetails from "./pages/ProductDetails";
import { Store } from "./pages/Store";

function App() {
  return (
    <APIContextProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
        <Router/>
            <Routes>
              <Route path="/" element={<Store />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          <Router/>
    
        </Container>
      </ShoppingCartProvider>
    </APIContextProvider>
  );
}

export default App;
