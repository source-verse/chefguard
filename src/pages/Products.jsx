import { Grid } from "../component/index";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const fetchProducts = async () => {
  const db = getFirestore(app);
  const products = await getDocs(collection(db, "products"));
  return products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <Grid data={products} filters limit={100} />
    </div>
  );
}

export default Products;
