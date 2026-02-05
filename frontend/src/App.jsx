import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductsForm from "./pages/ProductsForm/ProductsForm";
import Sobre from "./pages/Sobre/Sobre";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsform" element={<ProductsForm />} />
        <Route path="/productsform/:id" element={<ProductsForm />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

export default App;