import React, { useState } from "react";
// import {BiSearch} from  "react-icons/bi" ;
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Search from "./Search";

const SearchInput = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      {/* {visible && <Search />} */}
      <Link to="/search">
        <div
          className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
          onClick={handleClick}
        >
          <div className=" flex flex-row item-center justify-between">
            <div className="text-sm font-semibold px-6"> Anywhere</div>
            <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
              Any week{" "}
            </div>
            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
              <div className="hidden sm:block">Add Guests</div>
              <div className="p-2 bg-rose-500 rounded-full text-white">
                <BiSearch size={18} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchInput;
