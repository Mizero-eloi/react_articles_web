import { Link } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import { AiOutlineEye } from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* Hero section */}

      <section className="relative bg-[url(https://i.ytimg.com/vi/9yp1nv6xYM8/maxresdefault.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Discover Nice Articles
              <strong className="block font-extrabold text-pink-600">
                Here
              </strong>
            </h1>

            <p className="mt-4 text-xs text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-pink-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-600 focus:outline-none focus:ring active:bg-pink-400 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-pink-700 focus:outline-none focus:ring active:text-pink-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}

      <div className="mt-4">
        <h2 className="text-center font-medium">Articles</h2>

        <div className="flex gap-6 px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://files.modern.az/articles/2023/07/10/1689010256_1681136183_1676999250_1673160320_756675434551606.jpeg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://pyxis.nymag.com/v1/imgs/9ea/c61/e850d92194479a80d3dbea9c95e7dbc2ab-donald-trump.1x.rsquare.w1400.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>
        </div>

        <div className="flex gap-6 px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://files.modern.az/articles/2023/07/10/1689010256_1681136183_1676999250_1673160320_756675434551606.jpeg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://pyxis.nymag.com/v1/imgs/9ea/c61/e850d92194479a80d3dbea9c95e7dbc2ab-donald-trump.1x.rsquare.w1400.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>
        </div>
        <div className="flex gap-6 px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://files.modern.az/articles/2023/07/10/1689010256_1681136183_1676999250_1673160320_756675434551606.jpeg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>
          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>
          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-1/3 mt-2 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://pyxis.nymag.com/v1/imgs/9ea/c61/e850d92194479a80d3dbea9c95e7dbc2ab-donald-trump.1x.rsquare.w1400.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-pink-100 rounded-2xl">
                <p className="text-pink-500 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                  impeachment
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
