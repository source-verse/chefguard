import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const responsive = {
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

function Hero() {
  const [banners, setBanners] = useState([]);
  const [desc, setDesc] = useState([]);

  const fetchBanner = async () => {
    const db = getFirestore(app);
    const banners = await getDocs(collection(db, "banners"));
    return banners.docs
      .filter((doc) => doc.data().type == "main")
      .map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  useEffect(() => {
    fetchBanner().then((data) => {
      setBanners(data);
      console.log(banners);
    });
  }, []);

  return (
    <div className="relative pb-16">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        responsive={responsive}
        itemClass={"h-[70vh] lg:h-[90vh]"}
      >
        {banners.map((banner) => (
          <img
            className="object-cover w-full h-full"
            key={banner.id}
            src={banner.image}
            alt="banner"
          />
        ))}
      </Carousel>
      <HeroCard />
    </div>
  );
}

export default Hero;

function HeroCard() {
  return (
    <div className="hidden lg:block p-4 xl:w-1/4 md:w-1/2 w-full absolute bottom-20 left-32">
      <div className="h-full p-6 rounded-2xl bg-slate-700 bg-opacity-25 flex flex-col relative overflow-hidden">
        <h1 className="text-4xl text-gray-200 leading-none flex items-center pb-4 mb-4">
          <span>Lorem Ipsum</span>
        </h1>
        <p className="flex items-center text-gray-200 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          laboriosam optio incidunt! Est iusto temporibus accusantium atque
          porro maxime dolorum aut saepe quia, corrupti nesciunt!
        </p>

        <div className="flex gap-4 min-w-fit">
          <button className="text-center mt-auto font-semibold text-white border-[#125C21] bg-[#125C21] py-2 px-3 w-28 focus:outline-none hover:bg-[#125C21] rounded-xl">
            Contact Us
          </button>
          <button className="text-center mt-auto font-semibold text-[#125C21] border-2 border-[#125C21] bg-white py-2 px-3 w-28 focus:outline-none hover:bg-gray-500 rounded-xl">
            Products
          </button>
        </div>
      </div>
    </div>
  );
}
