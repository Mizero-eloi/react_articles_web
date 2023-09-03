import { AiOutlineEye } from "react-icons/ai";

const RelatedNews = () => {
  return (
    <div className="w-1/4">
      <div className="flex justify-between">
        <h2>Related News</h2>
        <p className="text-gray-600 text-sm">See all</p>
      </div>

      {/* list of related news */}

      <div className="flex flex-col gap-4">
        {/* Related news card */}
        <div className="bg-white mt-2 p-4 rounded-xl flex flex-col gap-2">
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
        </div>
        {/* Related news card */}
        <div className="bg-white mt-2 p-4 rounded-xl flex flex-col gap-2">
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
        </div>
        {/* Related news card */}
        <div className="bg-white mt-2 p-4 rounded-xl flex flex-col gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
