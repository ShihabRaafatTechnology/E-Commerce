import { CiShoppingBasket, CiHeart, CiSearch } from "react-icons/ci";
import HeaderCounter from "../HeaderCounter";
import useHeaderRightBar from "@hooks/useHeaderRightBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { signOut } from "@store/auth/authSlice";

const HeaderRightBar = () => {
  const { totalWishlist, totalCart } = useHeaderRightBar();
  const { accessToken, user } = useAppSelector((state) => state.auth)
  const [openAccount, setOpenAccount] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between">
      <div
        className="relative cursor-pointer mx-5"
        onClick={() => navigate("/search")}
      >
        <CiSearch className="text-primary text-[25px]" />
      </div>
      <HeaderCounter
        page="/wishlist"
        totalQuantity={totalWishlist}
        svgIcon={<CiHeart className="text-primary text-[25px]" />}
      />
      <HeaderCounter
        page="/cart"
        totalQuantity={totalCart}
        svgIcon={<CiShoppingBasket className="text-primary text-[25px]" />}
      />
      <div className="hidden lg:flex">
        {accessToken? (
          <div className="relative z-50 w-[50px] h-[50px] ml-2" onClick={() => setOpenAccount(!openAccount)}>
            {/* Dropdown menu */}
            <img src="https://avatars.githubusercontent.com/u/52350730?v=4" alt="avatar" className=" rounded-full border border-white cursor-pointer"/>

            {openAccount && (
              <div
                className="bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{user?.firstName} {user?.lastName}</div>
                  <div className="font-medium truncate">{user?.email}</div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownInformationButton"
                >
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-secondary hover:text-white duration-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-secondary hover:text-white duration-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-secondary hover:text-white duration-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className="py-2">
                  <Link
                    to="/sign-in"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-white duration-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={()=> dispatch(signOut())}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
        ):(
        <>
        <Link to="/register">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Register
            </span>
          </button>
        </Link>
        <Link to="/sign-in">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Login
            </span>
          </button>
        </Link>
        </>
        )}
      </div>
    </div>
  );
};

export default HeaderRightBar;
