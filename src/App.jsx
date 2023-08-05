import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AllProducts from "./pages/AllProducts";
import Categories from "./pages/Categories";
import Card from "./pages/Card";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories/:name" element={<Categories />} />
        <Route path="/cart" element={<Card />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Products />
    </>
  );
};

export default App;
