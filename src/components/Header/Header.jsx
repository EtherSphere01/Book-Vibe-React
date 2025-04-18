import React from "react";
import { Link } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/listedBooks">Listed Books</Link>
      </li>
      <li>
        <a>Pages to Read</a>
      </li>
    </>
  );
  return (
    <div className="content-text">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <li>
                <a className="btn bg-[#59C6D2] text-white lg:hidden">Sign Up</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white hidden lg:block text-center pt-2">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
