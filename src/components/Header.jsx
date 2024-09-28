import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("api call- ", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-1 items-center">
        <span className="flex items-center justify-center">
          <IoMenu size={38} onClick={() => toggleMenuHandeler()} />
        </span>
        <img
          className="mx-2 flex items-center justify-center w-28"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="logo"
        />
      </div>

      <div className="col-span-10 flex items-center justify-between">
        {/* Search input and suggestions */}
        <div className="relative flex-grow">
          <div className="flex items-center">
            <input
              className="border border-gray-300 p-2 pl-5 rounded-l-full w-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="px-4 border border-gray-300 p-1 bg-gray-100 rounded-r-full">
              <IoIosSearch size={32} />
            </button>
          </div>

          {/* Suggestions appear below the search box */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 border-2 border-gray-300 rounded-lg bg-white shadow-lg">
              <ul className="">
                {suggestions &&
                  suggestions.map((s) => (
                    <li
                      key={s}
                      className="p-1 pl-5 hover:bg-gray-100 cursor-pointer"
                    >
                      {s}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Microphone icon */}
        <div className="border border-gray-300 mx-4 p-2 bg-gray-100 rounded-full flex items-center justify-center w-12 h-12">
          <button>
            <FaMicrophone size={20} />
          </button>
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-center">
        <FaUserCircle size={32} />
      </div>
    </div>
  );
};

export default Header;

//getSearchSuggestions();
