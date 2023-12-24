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
import { MutatingDots } from "react-loader-spinner";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
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
  const banners = await getDocs(collection(db, "banners"));
  const testimonialList = await getDocs(collection(db, "testimonials"));
  const testimonial = testimonialList.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const productList = prod.docs
    .filter((doc) => doc.data().status == "active")
    .map((doc) => ({ id: doc.id, ...doc.data() }));
  const categoryList = cat.docs
    .filter((doc) => doc.data().status == "active")
    .map((doc) => ({ id: doc.id, ...doc.data() }));
  const bannerList = banners.docs
    .filter((doc) => doc.data().type == "sub")
    .filter((doc) => doc.data().status == "active")
    .map((doc) => ({ id: doc.id, ...doc.data() }));

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
  return { products, categoryList, bannerList, testimonial };
};

function Home() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsAndCategories();
        setCategories(data.categoryList);
        setProducts(data.products);
        setBanners(data.bannerList);
        setTestimonial(data.testimonial);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        // Set loading to false when data fetching is done
      }
    };

    fetchData();
  }, []);

  const behindTheSceneText =
    "Chefguard, founded by Mrs. Smitha in Malapuram district, Kerala, has become a leading supplier of domestic and commercial stoves in the state. Chefguard is highly regarded among gas burner, gas stove, and gas cylinder trolley dealers. The company offers online purchasing, maintenance booking, and complaint registration for customer convenience. Mrs. Smitha, the CEO, acknowledges the journey from a startup to a household name and remains committed to progress. The company empowers women and employs many homemakers who bring a unique perspective to household kitchen needs, resulting in satisfied customers. Chefguard not only serves domestic needs but also caters to commercial standards with satisfied customers in the hospitality industry.";
  const ourVisionText = `" Our largest vision is to protect every house from gas stove accidents. Even if it's anywhere around the world, we should be able to provide our services. So our group's main vision is to protect each and every life. Because Every Life Matters "`;
  // return categories && products && banners ? (
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
    <>
      <Hero />
      <div className="container px-10 pb-10 lg:pb-24 mx-auto">
        <div className="mt-9 lg:px-28 categories_arrows">
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
                  className="w-full object-center object-contain h-10 lg:h-16"
                />
                <p className="text-center text-primary capitalize font-semibold text-sm lg:text-lg mt-2">
                  {item.name}
                </p>
              </>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="pb-24">
        <h1 className="text-3xl pb-6 lg:pb-10 lg:text-5xl capitalize font-bold title-font text-center text-primary">
          Products
        </h1>
        <Grid data={products} viewMore limit={6} />
      </div>
      <Feature
        reverse
        text={behindTheSceneText}
        textClass="lg:text-xl"
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
        img={
          "https://firebasestorage.googleapis.com/v0/b/chefguard-5ca00.appspot.com/o/images%2Fvision.png?alt=media&token=bdd48b7c-5f28-427a-abc8-0942ba8119e2"
        }
        textClass={
          `font-semibold text-gray-500 sm:text-xl lg:text-2xl rounded tracking-widest` +
          "text-md"
        }
      />
      <FeatureTwo />
      <div className="container px-5 lg:px-10 pb-16 lg:pt-24 lg:pb-24 mx-auto">
        <div className="mt-9 lg:px-28">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            responsive={responsiveBanner}
            itemClass={"aspect-video md:aspect-[16/7]"}
          >
            {banners.map((item, i) => (
              <img
                className="object-cover w-full h-full"
                key={item.id}
                src={item.image}
                alt="banner"
              />
            ))}
          </Carousel>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Home;
