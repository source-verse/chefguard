import { useState, useEffect } from "react";
import { app } from "../firebase";
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

function FeatureTwo() {
  console.log("first")
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    console.log("triggered")
    fetchTestimonial().then((data) => {
      setTestimonial(data.testimonial);
    });
  }, []);
  return (
    testimonial.length && (
      <section className="text-gray-600 body-font">
        <div className="container px-10 pb-24 mx-auto">
          <h1 className="text-3xl lg:text-5xl font-medium title-font text-center text-primary mb-20">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 max-w-3/4 lg:flex-row flex-col items-center gap-10 lg:gap-0 ">
            <div className="lg:w-1/3 flex relative p-16 h-52 w-52">
              <div className="absolute h-52 w-52 rounded-full bg-green-600 opacity-50 right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1"></div>
              <div className="absolute w-full max-w-[13rem] text-center text-xl right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">
                &quot; {testimonial[0].message} &quot;
              </div>
            </div>
            <div className="p-4 lg:w-1/3 flex relative h-52 w-52">
              <div className="absolute h-52 w-52 rounded-full bg-green-600 opacity-50 right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1"></div>
              <div className="absolute w-full max-w-[13rem] text-center text-xl right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">
                &quot; {testimonial[1].message} &quot;
              </div>
            </div>
            <div className="p-4 lg:w-1/3 flex relative h-52 w-52">
              <div className="absolute h-52 w-52 rounded-full bg-green-600 opacity-50 right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1"></div>
              <div className="absolute w-full max-w-[13rem] text-center text-xl right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">
                &quot; {testimonial[2].message} &quot;
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default FeatureTwo;
