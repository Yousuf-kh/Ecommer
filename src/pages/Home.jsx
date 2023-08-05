import { useEffect, useState } from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import axios from "axios";
import Products from "../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products?limit=8");
      const data = res.data;
      setProducts(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <Hero />
      <Feature />
      {isLoading ? "...Loading" : <Products products={products} />}
    </>
  );
};

export default Home;
