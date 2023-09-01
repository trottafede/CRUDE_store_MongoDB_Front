import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products/");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products &&
          products.map((product) => {
            return <SingleProduct key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
}
