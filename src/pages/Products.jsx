import { Grid } from "../component/index";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { MutatingDots } from "react-loader-spinner";

const fetchProducts = async () => {
  const db = getFirestore(app);
  const products = await getDocs(collection(db, "products"));
  return products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is done
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <>
      <div className="grid justify-center items-center h-96">
        <MutatingDots
          height="200"
          width="80"
          radius={9}
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle={
            {
              /* additional wrapper styles */
            }
          }
          wrapperClass="additional-css-class"
        />
      </div>
    </>
  ) : (
    <div>
      <Grid data={products} filters limit={100} />
    </div>
  );
}

export default Products;
