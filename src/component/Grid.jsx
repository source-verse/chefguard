import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const fetchCategories = async () => {
  const db = getFirestore(app);
  const cat = await getDocs(collection(db, "categories"));
  const categoryList = cat.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return { categoryList };
};

const options = [
  "Price -- Low to High",
  "Price -- High to Low",
  "Offer -- Low to High",
  "Offer -- High to Low",
]; // Add more options as needed

function Grid({ viewMore, data, limit = 0, filters, categoryFilter }) {
  const [sortValue, setSortValue] = useState("Price -- Low to High");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [sortArray, setSortArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data2 = await fetchCategories();
        setFilterList(data2.categoryList.map((item) => item.name));

        if (!selectedFilter && categoryFilter) {
          setSelectedFilter(
            data2.categoryList.find((item) => item.id == categoryFilter).name
          );
        }

        if (selectedFilter) {
          setSortArray(() => {
            return [...data].filter((item) => {
              return (
                item.categoryId ===
                data2.categoryList.find((item) => item.name == selectedFilter)
                  .id
              );
            });
          });
        }
        if (!selectedFilter && !categoryFilter) {
          setSortArray(() => {
            switch (sortValue) {
              case "Price -- Low to High":
                return [...data].sort((a, b) => {
                  const priceA = Math.ceil(a.price - (a.price * a.offer) / 100);
                  const priceB = Math.ceil(b.price - (b.price * b.offer) / 100);
                  return priceA - priceB;
                });
              case "Price -- High to Low":
                return [...data].sort((a, b) => {
                  const priceA = Math.ceil(a.price - (a.price * a.offer) / 100);
                  const priceB = Math.ceil(b.price - (b.price * b.offer) / 100);
                  return priceB - priceA;
                });
              case "Offer -- Low to High":
                return [...data].sort((a, b) => a.offer - b.offer);

              case "Offer -- High to Low":
                return [...data].sort((a, b) => b.offer - a.offer);

              default:
                break;
            }
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [sortValue, data, selectedFilter, categoryFilter]);
  return (
    filterList && (
      <>
        <section className="text-gray-600 body-font">
          <div
            className={`container px-4 pb-10 lg:pb-14 mx-auto relative flex flex-col lg:flex-row gap-8 ${
              filters && "flex-col lg:flex-row gap-8 py-4"
            }`}
          >
            .
            {filters && (
              <div className="w-full lg:w-5/12 lg:block">
                <div className="border-2 p-4 rounded-lg">
                  <h2 className="text-3xl font-semibold">
                    Smart Cooking Accessories
                  </h2>
                  <p className="font-semibold mt-2">
                    Showing 1 - {sortArray.length} out of {sortArray.length}{" "}
                    products
                  </p>
                  <div className="mt-4"></div>
                  <Dropdown
                    selectedValue={sortValue}
                    setSelectedValue={setSortValue}
                    options={options} // Add more options as needed
                  />
                  <div className="my-4"></div>
                  <FilterDropdown
                    selectedValue={selectedFilter}
                    setSelectedValue={setSelectedFilter}
                    options={filterList} // Add more options as needed
                  />
                </div>
              </div>
            )}
            <div
              className={`grid grid-cols-2 lg:px-40 lg:grid-cols-3 gap-[10vw] lg:gap-16 w-full ${
                filters && "gap-8 lg:px-6"
              }`}
            >
              {sortArray
                .map((item, i) => (
                  <Link
                    className="inline-block w-full"
                    to={`/product/${item.id}`}
                    key={i}
                  >
                    <ProductCard data={item} key={i} />
                  </Link>
                ))
                .slice(0, limit)}
            </div>
            {viewMore && (
              <Link
                to={`/product`}
                className="text-primary font-bold absolute -bottom-8 right-0 lg:bottom-0 mr-4 text-sm lg:text-md"
              >
                View More &gt;
              </Link>
            )}
          </div>
        </section>
      </>
    )
  );
}

export default Grid;

function ProductCard({ data }) {
  return (
    <>
      <div className="border-2 rounded-md p-3 lg:p-4 border-slate-200">
        <div className="block relative aspect-square rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={data.images[0]}
          />
        </div>
        <div className="mt-8">
          <h2 className="text-gray-900 title-font text-md font-bold lg:text-lg truncate">
            {data.name}
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 truncate">
            {data.categoryName}
          </h3>
          {data.stock ? (
            <>
              {data.offer ? (
                <>
                  <span className="mt-1 text-gray-500 mr-2 lg:mr-4 line-through font-bold lg:inline-block text-sm lg:text-lg">
                    &#8377;{Math.ceil(data.price)}
                  </span>
                  <span className="mt-1 text-black mr-2 lg:mr-4 font-bold text-sm lg:text-lg">
                    &#8377;
                    {Math.ceil(data.price - (data.price * data.offer) / 100)}
                  </span>
                  <span className="mt-1 text-primary mr-2 lg:mr-4 font-semibold text-sm hidden sm:inline-block lg:text-lg whitespace-nowrap ">
                    {data.offer}% off
                  </span>
                </>
              ) : (
                <>
                  <span className="mt-1 text-black mr-2 lg:mr-4 font-bold text-sm lg:text-lg">
                    &#8377;{Math.ceil(data.price)}
                  </span>
                </>
              )}
            </>
          ) : (
            <p className="text-red-600 font-bold text-xs">Out Of Stock</p>
          )}
        </div>
      </div>
    </>
  );
}

const Dropdown = ({ selectedValue, setSelectedValue, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    console.log(value);
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      {isOpen && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 opacity-0"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
      >
        {" "}
        <span>
          <span className="text-gray-500">Sort by: </span>
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
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

const FilterDropdown = ({ selectedValue, setSelectedValue, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      {isOpen && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 opacity-0"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
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
