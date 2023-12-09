import {
  Feature,
  Grid,
  FeatureTwo,
  Contact,
  Hero,
  Timeline,
  Services,
} from "../component/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const responsiveBanner = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    default: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const fetchProductsAndCategories = async () => {
  const db = getFirestore(app);
  const prod = await getDocs(collection(db, "products"));
  const cat = await getDocs(collection(db, "categories"));
  const productList = prod.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const categoryList = cat.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  let products = [];

  for (const prodData of productList) {
    // console.log({prodData})
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

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsAndCategories().then((data) => {
      setCategories(data.categoryList);
      setProducts(data.products);
    });
  }, []);

  const behindTheSceneText =
    "Chefguard, founded by Mrs. Smitha in Malapuram district, Kerala, has become a leading supplier of domestic and commercial stoves in the state. Chefguard is highly regarded among gas burner, gas stove, and gas cylinder trolley dealers. The company offers online purchasing, maintenance booking, and complaint registration for customer convenience. Mrs. Smitha, the CEO, acknowledges the journey from a startup to a household name and remains committed to progress. The company empowers women and employs many homemakers who bring a unique perspective to household kitchen needs, resulting in satisfied customers. Chefguard not only serves domestic needs but also caters to commercial standards with satisfied customers in the hospitality industry.";
  const ourVisionText = `" Our largest vision is to protect every house from gas stove accidents. Even if it's anywhere around the world, we should be able to provide our services. So our group's main vision is to protect each and every life. Because Every Life Matters "`;
  return (
    categories &&
    products && (
      <>
        <Hero />
        <div className="container px-5 pb-24 mx-auto">
          <div className="mt-9 px-28">
            <Carousel
              swipeable={true}
              draggable={true}
              // showDots={true}
              autoPlaySpeed={5000}
              responsive={responsive}
              itemClass={""}
            >
              {categories.map((item, i) => (
                <>
                  <img
                    key={i}
                    src={item.image}
                    className="w-full object-center object-contain h-16"
                  />
                  <p className="text-center text-primary capitalize font-semibold text-lg mt-2">
                    {item.name}
                  </p>
                </>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="pb-24">
          <h1 className="sm:text-3xl lg:text-5xl capitalize font-medium title-font text-center text-primary">
            Products
          </h1>
          <Grid data={products} viewMore limit={6} />
        </div>
        <Feature
          reverse
          text={behindTheSceneText}
          headline={"Behind The Brand"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/chefguard-5ca00.appspot.com/o/images%2F%5Bfpdl.in%5D_flame-from-fire-that-is-lit-up_865967-436718_large.jpg?alt=media&token=6e9b31a1-277e-47c0-bfd1-9a676676f607"
          }
        />
        <Timeline />
        <Services />
        <Feature
          text={ourVisionText}
          headline={"Our Vision"}
          img={""}
          textClass={`font-semibold text-gray-500 text-4xl tracking-widest`}
        />
        <FeatureTwo />
        <div className="container px-5 py-24 mx-auto">
          <div className="mt-9 px-28">
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              responsive={responsiveBanner}
              itemClass={"h-[90vh]"}
            >
              {[1, 2, 3, 4, 5].map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </Carousel>
          </div>
        </div>
        <Contact />
      </>
    )
  );
}

export default Home;
