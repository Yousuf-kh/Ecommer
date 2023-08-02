import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import Feature from "../components/Feature";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = res.data;
      setProducts(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return isLoading ? (
    "...Loading"
  ) : (
    <>
      <Feature />
      <h1 className="text-center text-3xl font-bold">All Products</h1>
      <Products products={products} />
    </>
  );
};

export default AllProducts;
