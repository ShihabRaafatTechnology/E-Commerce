import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import HeaderRightBar from "./HeaderRightBar";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="bg-black text-white py-5">
      <div className="w-4/5 mx-auto">
        <div className="relative flex justify-between items-center">
          <h2 className="flex lg:hidden text-white font-extrabold text-[1.5em] z-50">THE VARIED</h2>

          <nav className="hidden lg:flex darumadrop-one-regular">
            <div className="flex flex-wrap justify-between items-center p-4 pl-0">
              <Nav>
                <li>
                  <NavLink
                    to="/"
                    className="hover:text-secondary"
                    aria-current="page"
                  >
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categories" className="hover:text-secondary">
                    COLLECTIONS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className="hover:text-secondary">
                    ABOUT US
                  </NavLink>
                </li>
              </Nav>
            </div>
          </nav>

          <h2 className="hidden lg:flex oswald text-white font-extrabold text-[1.5em] z-50">THE VARIED</h2>

          <nav className="flex items-center justify-center darumadrop-one-regular">
            <div className="hidden lg:flex">
              <Nav>
                <li>
                  <NavLink
                    to="https://www.behance.net/shihabraafat"
                    className="hover:text-secondary"
                    target="_blank"
                  >
                    BEHANCE
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://www.instagram.com/shihab.raafat/" className="hover:text-secondary" target="_blank">
                    INSTAGRAM
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://shihab-raafat.netlify.app/" className="hover:text-secondary" target="_blank">
                    PORTFOLIO
                  </NavLink>
                </li>
              </Nav>
            </div>
          </nav>

          <nav>
            {/*  Icons */}
            <div className="flex items-center justify-between">
              <HeaderRightBar />
              <CiMenuFries
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="lg:hidden cursor-pointer text-[25px]"
              />
            </div>
          </nav>
        </div>

        <div
          className={
            isNavOpen
              ? "fixed top-0 right-0 w-[80vw] h-[100vh] z-50 bg-black"
              : "hidden"
          }
        >
          <div
            className="absolute top-[30px] right-[30px] text-white text-3xl cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            <IoCloseSharp />
          </div>
          <ul className="flex flex-col text-center h-full justify-center leading-[100px]">
            <li>
              <NavLink
                to="/"
                className="text-white font-semibold tracking-widest text-4xl"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className="text-white font-semibold tracking-widest text-4xl"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="text-white font-semibold tracking-widest text-4xl"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
