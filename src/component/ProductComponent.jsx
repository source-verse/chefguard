import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { MutatingDots } from "react-loader-spinner";

const fetchProductsAndCategories = async () => {
  const db = getFirestore(app);
  const prod = await getDocs(collection(db, "products"));
  const cat = await getDocs(collection(db, "categories"));
  const productList = prod.docs
    .filter((doc) => doc.data().status == "active")
    .map((doc) => ({ id: doc.id, ...doc.data() }));
  const categoryList = cat.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  let products = [];

  for (const prodData of productList) {
    if (prodData.categoryId) {
      const categoryId = prodData.categoryId;
      const catData = categoryList.find(
        (cat) => cat.id && cat.id.toString() === categoryId.toString()
      );
      if (catData) {
        products.push({ ...prodData, categoryName: catData.name });
      } else {
        products.push({ ...prodData, categoryName: "" });
      }
    }
  }
  return { products, categoryList };
};

function ProductComponent() {
  const [categories, setCategories] = useState([]);
  const params = useParams();
  const [product, setProduct] = useState({});
  const [currentPreview, setCurrentPreview] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsAndCategories();
        setCategories(data.category);
        setProduct(data.products.find((item) => params.id == item.id));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000); // Set loading to false when data fetching is done
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
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-10 py-24 mx-auto">
        <div className="w-full lg:w-4/5 mx-auto lg:flex lg:flex-wrap">
          <div className="grid grid-cols-[80px_auto] gap-4">
            <div className="flex flex-col gap-4 rounded-lg">
              {product.images &&
                product.images.map((item, i) => (
                  <>
                    <img
                      alt="ecommerce"
                      className="aspect-square object-cover object-center shadow-lg"
                      src={item}
                    />
                  </>
                ))}
            </div>
            {product.images ? (
              <img
                alt="ecommerce"
                className="w-full lg:h-96 h-full object-cover object-center rounded-lg aspect-square shadow-lg"
                src={product.images[currentPreview]}
              />
            ) : (
              <div className="lg:w-1/2 w-full lg:h-auto h-64"></div>
            )}
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:pb-6 mt-6 lg:mt-0">
            <h1 className="text-primary text-3xl title-font font-bold mb-1">
              {product.name}
            </h1>
            <h2 className="text-sm title-font text-gray-500">
              model no. {product.modelNo}
            </h2>
            <div className="flex">
              <span className="mt-1 text-black mr-4 font-bold">
                &#8377;{product.price - (product.price * product.offer) / 100}
              </span>
              <span className="mt-1 text-gray-500 mr-4 line-through font-bold">
                &#8377;{product.price}
              </span>
              <span className="mt-1 text-primary mr-4 font-semibold">
                {product.offer}% off
              </span>
            </div>
            <div>
              <p className="mt-4 font-bold text-black">Features:</p>
              <ul>
                {product.features &&
                  product.features.map((item, i) => (
                    <div key={i} className="text-black">
                      {" "}
                      • {item}
                    </div>
                  ))}
              </ul>
            </div>
            <p className="mt-4 font-bold underline text-black">Description:</p>
            <p className="leading-relaxed text-gray-500 mt-2">{product.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductComponent;
