import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchSuggestions = async () => {
    console.log("api call- ", searchQuery);
    
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <span className="flex items-center justify-center">
          <IoMenu size={38} onClick={() => toggleMenuHandeler()} />
        </span>
        <img
          className="mx-2 flex items-center justify-center w-28"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="logo"
        ></img>
      </div>

      <div className="col-span-10 flex items-center justify-center">
        <input
          className="w-1/2 border border-gray-300 p-2 rounded-l-full "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button className="px-4 border border-gray-300 p-1 bg-gray-100 rounded-r-full">
          <IoIosSearch size={32} />
        </button>
        <div className="border border-gray-300 m-4 p-2 bg-gray-100 rounded-full flex items-center justify-center w-12 h-12">
          <button>
            <FaMicrophone size={20} />
          </button>
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-center ">
        <FaUserCircle size={32} />
      </div>
    </div>
  );
};

export default Header;

//getSearchSuggestions();
