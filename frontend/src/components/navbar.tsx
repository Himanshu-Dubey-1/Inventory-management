import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const navbar = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-around bg-[#D5C6E0]">
        <div className="flex w-full justify-center items-center text-blackpx-4 py-3">
          
          <form action="/" method="get" className="flex gap-5 mx-5">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-500 bg-white pl-2 md:pr-20 py-2 rounded-xl"
            />
            <button
              type="submit"
              className="bg-blue-500 rounded-xl text-white px-4 py-1"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex space-x-2 mx-10 ">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block size-10 rounded-full ring-2 ring-white"
          />
        </div>
        {/* <div className="flex gap-4 px-4 py-3 mr-5">
        <button className="bg-blue-700 rounded-xl text-white px-4 py-2">
          Logout
        </button>
        </div> */}
        
      </div>
    
    </>
  );
};

export default navbar;
