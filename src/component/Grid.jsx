import { useState } from "react";
import { Link } from "react-router-dom";

const options = ["Price", "Release Date", "Category", "Discount"]; // Add more options as needed

function Grid({ viewMore, data, limit = 0, filters }) {
  const [sortValue, setSortValue] = useState("");

  return (
    <>
      <section className="text-gray-600 body-font">
        <div
          className={`container px-5 py-8 mx-auto relative ${
            filters && "flex"
          }`}
        >
          {filters && (
            <div className="w-1/4">
              <h2 className="text-3xl font-semibold">
                Smart Cooking Accessories
              </h2>
              <p className="font-semibold mt-2">
                Showing 1 - {data.length} out of {data.length} products
              </p>
              <div className="mt-4"></div>
              <Dropdown
                selectedValue={sortValue}
                setSelectedValue={setSortValue}
                options={options} // Add more options as needed
              />
            </div>
          )}
          <div className={`${filters && "w-3/4"} flex flex-wrap -m-4`}>
            {data
              .map((item, i) => (
                <>
                  <div className="lg:w-1/3 md:w-1/2 p-12 px-12 w-full">
                    <Link
                      className="inline-block w-full"
                      to={`product/${item.id}`}
                    >
                      <ProductCard data={item} key={i} />
                    </Link>
                  </div>
                </>
              ))
              .slice(0, limit)}
          </div>
          {viewMore && (
            <Link
              to={`/product`}
              className="text-primary font-bold absolute right-0 mr-14"
            >
              View More &gt;
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

export default Grid;

function ProductCard({ data }) {
  return (
    <>
      <div className=" border-2 rounded-md p-4 border-slate-200">
        <a className="block relative aspect-square rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={data.images[0]}
          />
        </a>
        <div className="mt-8">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {data.name}
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {data.categoryName}
          </h3>
          {data.stock && (
            <>
              <span className="mt-1 text-black mr-4 font-bold">
                &#8377;{data.price - (data.price * data.offer) / 100}
              </span>
              <span className="mt-1 text-gray-500 mr-4 line-through font-bold">
                &#8377;{data.price}
              </span>
              <span className="mt-1 text-primary mr-4 font-semibold">
                {data.offer}% off
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const Dropdown = ({ selectedValue, setSelectedValue, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
      >
        {" "}
        <span>
          <span className="text-gray-500">Filter by: </span>
          {selectedValue}
        </span>
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
