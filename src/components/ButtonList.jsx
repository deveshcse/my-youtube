import React from "react";
import Button from "./Button";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
const buttonList = [
  "All",
  "Gaming",
  "Live",
  "Songs",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Movies",
  "Technology",
  "Education",
  "Travel",
  "Fitness",
  "Comedy",
  "News",
  "Fashion",
  "Sports",
  "Music",
  "Art",
  "Photography",
  "Vlogs",
  "Podcasts",
  "DIY",
  "Science",
  "History",
  "Health",
  "Motivation",
  "Business",
  "Finance",
  "Real Estate",
  "Cars",
  "Motorcycles",
  "Food",
  "Pets",
  "Dance",
  "Adventure",
  "Skincare",
  "Parenting",
  "Relationships",
  "Books",
  "Tech Reviews",
];

const ButtonList = () => {
  return (
<>
      <style>
        {`
          .hide-scroll-bar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scroll-bar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      
      <div className="flex">
        <div className="flex items-center justify-center">
          {/* <button><IoIosArrowDropleft size={34} /></button> */}
        </div>
        <div className="flex items-center overflow-x-scroll hide-scroll-bar">
          {/* Left Scroll Button */}
          {buttonList.map((button, index) => (
            <Button key={index} name={button} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          {/* <button ><IoIosArrowDropright size={34} /> 
          </button>*/}
        </div>
      </div>
    </>
  );
};

export default ButtonList;
