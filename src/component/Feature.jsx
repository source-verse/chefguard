function Feature({ reverse, text, headline, img, textClass }) {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-3xl lg:text-5xl capitalize font-medium title-font text-center text-primary">
        {headline}
      </h1>
      <div
        className={`container px-5 pt-16 pb-24 mx-auto flex flex-wrap justify-center ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col justify-center items-center mb-10 h-full flex-wrap">
            <p className={`${textClass} text-gray-600 text-xl max-w-xl`}>
              {text}
            </p>
          </div>
        </div>
        <div
          className={`lg:w-1/2 w-full mb-10 lg:mb-0 flex items-center justify-center rounded-lg overflow-hidden mt-12 g:mt-0`}
        >
          <img
            alt="feature"
            className="object-cover object-center"
            src={img || "https://dummyimage.com/460x500"}
          />
        </div>
      </div>
    </section>
  );
}

export default Feature;
