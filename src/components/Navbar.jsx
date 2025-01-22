import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <nav className="text-black font-bold flex items-center justify-center space-x-4 bg-blue-800 h-16">
      <ul
        className={`${
          navBar ? "block" : "hidden"
        }  absolute top-0 right-0 bg-white space-y-4 text-white w-40 px-3 py-8
        sm:static sm:flex sm:items-center sm:space-x-8 sm:space-y-0 sm:bg-transparent sm:text-white sm:w-fit sm:px-0 sm:py-2 gap-12`}
      >
        <li>
          <Link to={`/home`} className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/browse-books`} className="hover:underline ">
            Browse Books
          </Link>
        </li>
        <li>
          <Link to={`/add-book`} className="hover:underline">
            Add Book
          </Link>
        </li>
        <Btn
          style={`absolute text-blue-600 text-blue-400 -top-4 right-4 text-3xl cursor-pointer duration-500  sm:hidden rotate-45`}
          content={`+`}
          action={toggleNavBar}
        />
      </ul>
      <div>
        <Btn
          style={`text-3xl cursor-pointer sm:hidden `}
          content={`+`}
          action={toggleNavBar}
        />
      </div>
    </nav>
  );
};

export default Navbar;