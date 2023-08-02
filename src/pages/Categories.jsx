import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await res.data;
      setProducts(data);
    };
    getCategories();
  }, []);

  return <Products products={products} />;
};

export default Categories;
