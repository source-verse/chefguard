function Footer() {
  return (
    <footer className="text-white body-font bg-primary ">
      <div className="container lg:px-10 py-12 lg:py-24 mx-auto flex md:items-center gap-6 lg:gap-0 lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="lg:w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            {/* <img
              className="w-14 md:w-16 scale-125 mr-3"
              src="https://firebasestorage.googleapis.com/v0/b/chefguard-5ca00.appspot.com/o/images%2Fphoto_2023-11-05_22-00-02-removebg-preview.png?alt=media&token=34926ae0-1bc0-47a5-bd2d-7c4eb314ef53"
            /> */}
            <span className="text-xl">CHEFGUARD</span>
          </a>
          <p className="mt-2 w-64 text-sm text-white">
            As we are aiming at a complete modern kitchen solution, visualising
            an accident free, safe and secure home by providing the finest and
            latest cooking tools. We are providing latest franchise
            opportunities.
          </p>
        </div>
        <div className="lg:w-1/3 flex-grow flex flex-wrap -mb-10 lg:text-left text-center">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font text-white tracking-widest text-sm mb-3 font-semibold">
              Get in Touch
            </h2>
            <nav className="list-none mb-10">
              <li className="flex justify-center lg:justify-start">
                <a className="text-white hover:underline cursor-pointer flex w-fit gap-2 items-center">
                  <svg
                    version="1.1"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    fill="white"
                  >
                    <g>
                      <path
                        d="M256 0C166.035 0 91 72.47 91 165c0 35.202 10.578 66.592 30.879 96.006l121.494 189.58c5.894 9.216 19.372 9.198 25.254 0l122.021-190.225C410.512 232.28 421 199.307 421 165 421 74.019 346.981 0 256 0zm0 240c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75-33.647 75-75 75z"
                        fill="#fff"
                        opacity="1"
                        data-original="#fff"
                        className=""
                      ></path>
                      <path
                        d="m373.264 344.695-75.531 118.087c-19.551 30.482-64.024 30.382-83.481.029l-75.654-118.085C72.034 360.116 31 388.309 31 422c0 58.462 115.928 90 225 90s225-31.538 225-90c0-33.715-41.091-61.923-107.736-77.305z"
                        fill="#fff"
                        opacity="1"
                        data-original="#fff"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  Address no.2 Malappuram
                </a>
              </li>
              <li className="flex justify-center lg:justify-start">
                <a className="text-white hover:underline cursor-pointer flex w-fit gap-2 items-center">
                  <svg
                    version="1.1"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 513.64 513.64"
                  >
                    <g>
                      <path
                        d="m499.66 376.96-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z"
                        fill="#fff"
                        opacity="1"
                        data-original="#fff"
                      ></path>
                    </g>
                  </svg>
                  +91 9876543210
                </a>
              </li>
              <li className="flex justify-center lg:justify-start">
                <a className="text-white hover:underline cursor-pointer flex w-fit gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="m331.756 277.251-42.881 43.026c-17.389 17.45-47.985 17.826-65.75 0l-42.883-43.026L26.226 431.767C31.959 434.418 38.28 436 45 436h422c6.72 0 13.039-1.58 18.77-4.232L331.756 277.251z"
                        fill="#fff"
                        opacity="1"
                        data-original="#fff"
                      ></path>
                      <path
                        d="M467 76H45c-6.72 0-13.041 1.582-18.772 4.233l164.577 165.123c.011.011.024.013.035.024a.05.05 0 0 1 .013.026l53.513 53.69c5.684 5.684 17.586 5.684 23.27 0l53.502-53.681s.013-.024.024-.035c0 0 .024-.013.035-.024L485.77 80.232C480.039 77.58 473.72 76 467 76zM4.786 101.212C1.82 107.21 0 113.868 0 121v270c0 7.132 1.818 13.79 4.785 19.788l154.283-154.783L4.786 101.212zM507.214 101.21 352.933 256.005 507.214 410.79C510.18 404.792 512 398.134 512 391V121c0-7.134-1.82-13.792-4.786-19.79z"
                        fill="#fff"
                        opacity="1"
                        data-original="#fff"
                      ></path>
                    </g>
                  </svg>
                  chefguard@gmail.com
                </a>
              </li>
              <li className="flex justify-center lg:justify-start">
                <a className="text-white hover:underline cursor-pointer flex w-fit gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 32 32"
                  >
                    <g>
                      <path
                        d="M21.386 10C20.331 5.1 18.081 2 16 2s-4.331 3.1-5.386 8zM10 16a30.013 30.013 0 0 0 .267 4h11.466A30.013 30.013 0 0 0 22 16a30.013 30.013 0 0 0-.267-4H10.267A30.013 30.013 0 0 0 10 16zM10.614 22c1.055 4.9 3.305 8 5.386 8s4.331-3.1 5.386-8zM23.434 10h6.3a15.058 15.058 0 0 0-10.449-8.626C21.182 3.043 22.67 6.129 23.434 10zM30.453 12h-6.7A32.332 32.332 0 0 1 24 16a32.332 32.332 0 0 1-.248 4h6.7a14.9 14.9 0 0 0 0-8zM19.285 30.626A15.058 15.058 0 0 0 29.736 22h-6.3c-.766 3.871-2.254 6.957-4.151 8.626zM8.566 22h-6.3a15.058 15.058 0 0 0 10.451 8.626C10.818 28.957 9.33 25.871 8.566 22zM12.715 1.374A15.058 15.058 0 0 0 2.264 10h6.3c.766-3.871 2.254-6.957 4.151-8.626zM8 16a32.332 32.332 0 0 1 .248-4h-6.7a14.9 14.9 0 0 0 0 8h6.7A32.332 32.332 0 0 1 8 16z"
                        fill="#fff"
                        opacity="1"
                        data-original="#fff"
                      ></path>
                    </g>
                  </svg>
                  www.chefguard.in
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">
              Explore
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:underline cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white hover:underline cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-white hover:underline cursor-pointer">
                  Products
                </a>
              </li>
              <li>
                <a className="text-white hover:underline cursor-pointer">
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">
            Newsletter
          </h2>
          <div className="relative mb-4 flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-primary rounded border border-gray-300 focus:border-[#125C21] focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button className="text-primary bg-white py-2 px-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col lg:flex-row">
          <p className="text-white text-sm text-center lg:text-left">
            Copyright © 2023. india. All rights reserved
          </p>
          <span className="inline-flex mx-auto lg:ml-auto mt-0 mt-2 justify-center lg:justify-start">
            <a className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
