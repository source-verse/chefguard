import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  useEffect(() => {
    window.innerWidth > 1024 ? setIsOpenMenu(true) : setIsOpenMenu(false);
  }, []);

  const toggleVariable = () => {
    setIsOpenMenu(!isOpenMenu);
    console.log(isOpenMenu);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap px-5 py-0 gap-10 md:flex-row items-center relative">
        <Link
          className="flex title-font font-medium items-center text-gray-900 lg:mb-4 md:mb-0"
          to={`/`}
        >
          <img
            className="w-14 md:w-16 scale-125"
            src="https://firebasestorage.googleapis.com/v0/b/chefguard-5ca00.appspot.com/o/images%2Fphoto_2023-11-05_22-00-02-removebg-preview.png?alt=media&token=34926ae0-1bc0-47a5-bd2d-7c4eb314ef53"
          />
        </Link>
        <button className="ml-auto lg:hidden" onClick={toggleVariable}>
          <svg
            version="1.1"
            x="0"
            y="0"
            viewBox="0 0 32 32"
            className="w-6 md:w-8"
          >
            <g>
              <path
                d="M29 8H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4zM29 28H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4zM29 18H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4z"
                fill="#125C21"
                opacity="1"
                data-original="#125C21"
              ></path>
            </g>
          </svg>
        </button>

        {isOpenMenu && (
          <nav
            className={`absolute lg:static md:ml-auto top-16 right-0 bg-white lg:bg-transparent rounded shadow-md lg:shadow-none p-4 flex flex-col lg:flex-row items-center text-base gap-4 lg:gap-10 justify-center font-semibold z-50`}
          >
            <Link className="mr-5 hover:text-gray-900 cursor-pointer" to={`/`}>
              Home
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to={`/about`}
            >
              About
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to={`/services`}
            >
              Services
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to={`/product`}
            >
              Product
            </Link>
          </nav>
        )}
        <button className="hidden lg:inline-flex font-semibold items-center text-white bg-[#125C21] border-0 py-1 px-3 focus:outline-none rounded-lg text-base mt-4 md:mt-0">
          Contact Us
        </button>
      </div>
    </header>
  );
}

export default Header;
