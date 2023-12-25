import { useState, useEffect } from "react";
import { app } from "../firebase";
import Carousel from "react-multi-carousel";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const fetchTestimonial = async () => {
  const db = getFirestore(app);
  const testimonialList = await getDocs(collection(db, "testimonials"));
  const testimonial = testimonialList.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return { testimonial };
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function FeatureTwo() {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetchTestimonial().then((data) => {
      setTestimonial(data.testimonial);
    });
  }, []);
  return (
    testimonial.length && (
      <section className="text-gray-600 body-font">
        <div className="container px-10 pb-24 mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold title-font text-center text-primary mb:16 lg:mb-20">
            Testimonials
          </h1>
          <div className="max-w-3xl mx-auto categories_arrows">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              autoPlay={true}
              infinite
              autoPlaySpeed={3000}
              responsive={responsive}
              itemClass={""}
              containerClass={"py-8 gap-10"}
            >
              {testimonial.map((item, i) => (
                <>
                  <div className="relative h-40">
                    <div className="absolute -z-1 bg-[#009F20] opacity-40 rounded-full h-44 w-44 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute -z-1 text-black font-bold text-center w-52 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {'"' + item.message + '"'}
                    </div>
                  </div>
                </>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    )
  );
}

export default FeatureTwo;
