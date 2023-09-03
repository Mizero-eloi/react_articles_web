const Sidebar = () => {
  return (
    <div className="w-[15%] flex flex-col gap-3">
      {/* profile */}
      <div className="bg-white p-6 flex flex-col gap-3 rounded-xl">
        <div className="w-[50px] h-[50px]  bg-black rounded-full">
          <img
            src="https://media.licdn.com/dms/image/C5603AQEXHmILrTXB5w/profile-displayphoto-shrink_800_800/0/1637779221612?e=2147483647&v=beta&t=-iQgiGe60L6lzn_f_SxEqs7cNA68krfa959qQ7_7xwA"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-sm">Iradukunda Bonte</h1>
      </div>

      {/* Categories */}

      <div className="p-6 bg-white flex flex-col gap-3 rounded-xl">
        <h2>Category</h2>

        {/* list of categories */}

        <p className="text-xs text-pink-400">Politics</p>
        <p className="text-gray-700 text-xs">Business</p>
        <p className="text-gray-700 text-xs">Finance</p>
        <p className="text-gray-700 text-xs">Technology</p>
        <p className="text-gray-700 text-xs">Media</p>
        <p className="text-gray-700 text-xs">Sports</p>
        <p className="text-gray-700 text-xs">Media</p>
        <p className="text-gray-700 text-xs">Administration</p>
        <p className="text-gray-700 text-xs">Defense</p>
        <p className="text-gray-700 text-xs">Music</p>
        <p className="text-gray-700 text-xs">Energy</p>
        <p className="text-gray-700 text-xs">Game</p>
      </div>
    </div>
  );
};

export default Sidebar;
