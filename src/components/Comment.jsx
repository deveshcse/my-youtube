import { comment } from "postcss";
import React from "react";
import { FaUserCircle } from "react-icons/fa";


const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 my-2">
      <div className="mt-1 pt-1"> <FaUserCircle size={28} /> </div>
      <div className="m-1 p-1 ">
        <p>{name}</p>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Comments;
