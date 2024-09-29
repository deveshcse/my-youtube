import React from "react";
import { useSelector } from "react-redux";
import { FaHome, FaMusic, FaRunning, FaGamepad, FaFilm } from 'react-icons/fa';
import { MdVideoLibrary, MdLiveTv } from 'react-icons/md';
import { SiYoutubeshorts } from "react-icons/si";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return <div></div>;
  }

  return (
    <div className="m-2 p-2 text-lg text-black">
      <div>
        <ul className="p-1 space-y-3">
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <FaHome size={28} />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <SiYoutubeshorts size={28} />
            <span>Shorts</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <MdVideoLibrary size={28} />
            <span>Videos</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <MdLiveTv size={28} />
            <span>Live</span>
          </li>
        </ul>
      </div>
  
      <div className="p-1 mt-6">
        <h1 className="text-gray-500 font-semibold mb-3">Subscriptions</h1>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <FaMusic size={28} />
            <span>Music</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <FaRunning size={28} />
            <span>Sports</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <FaGamepad size={28} />
            <span>Gaming</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            <FaFilm size={28} />
            <span>Movies</span>
          </li>
        </ul>
      </div>
    </div>
  );
}  
export default Sidebar;
