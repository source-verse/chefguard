function Feature({ reverse, text, headline, img, textClass }) {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-3xl lg:text-5xl capitalize font-bold title-font text-center text-primary">
        {headline}
      </h1>
      <div
        className={`container px-10 pt-10 pb-8 lg:pb-24 mx-auto flex flex-wrap justify-center ${
          reverse && "flex-row-reverse pt-12 pb-12"
        }`}
      >
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col justify-center items-center mb-10 h-full flex-wrap">
            <p className={`${textClass} text-center text-gray-600 max-w-xl`}>
              {text}
            </p>
          </div>
        </div>
        <div
          className={`lg:w-1/2 w-full mb-10 lg:mb-0 flex items-center justify-center rounded-2xl overflow-hidden mt-12 lg:mt-0`}
        >
          <img
            alt="feature"
            className="object-cover object-center max-h-[500px] rounded-lg"
            src={img || "https://dummyimage.com/460x500"}
          />
        </div>
      </div>
    </section>
  );
}

export default Feature;
