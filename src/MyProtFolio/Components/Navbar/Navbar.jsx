import { NavLink } from "react-router-dom";
import { useDarkMode } from "../DarkMode/useDarkMode";

import { TbSunHigh } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import Container from "../Container/Container";

const Navbar = () => {
     const { handleDark, mode } = useDarkMode();

     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/addProduct"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Add Product
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/contact"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Contact Us
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/about"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         About us
                    </NavLink>
               </li>
          </>
     );
     return (
          <div>
               <div>
                    <Container>
                         <div className=" navbar bg-base-100 bg-gradient-to-r from-blue-900 to-blue-900">
                              <div className="navbar-start">
                                   <div className="dropdown">
                                        <label
                                             tabIndex={0}
                                             className="btn btn-ghost lg:hidden"
                                        >
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-5 w-5"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M4 6h16M4 12h8m-8 6h16"
                                                  />
                                             </svg>
                                        </label>
                                        <ul
                                             tabIndex={0}
                                             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                                        >
                                             {navLists}
                                        </ul>
                                   </div>
                                   <img
                                        className="rounded-full h-[50px] w-[50px]"
                                        src="https://i.ibb.co/dQ14xFH/sasas.jpg"
                                        alt=""
                                   />

                                   <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                                        RJ Tech
                                   </p>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                   <ul className="menu menu-horizontal px-1 text-white">
                                        {navLists}
                                   </ul>
                              </div>

                              <div className="navbar-end ">
                                   {/* <button onClick={handleDark} className="btn">
                                   {mode === "light" ? "light" : "dark"}
                              </button> */}
                                   {/* 000000000000000000000000000000000 */}
                                   {/* <div className="mr-2">
                                        {mode === "light" ? (
                                             <button
                                                  className="text-3xl text-white"
                                                  onClick={handleDark}
                                             >
                                                  <TbSunHigh></TbSunHigh>
                                             </button>
                                        ) : (
                                             <button
                                                  onClick={handleDark}
                                                  className="text-3xl"
                                             >
                                                  <MdDarkMode></MdDarkMode>
                                             </button>
                                        )}
                                   </div> */}
                                   {/* <input
                                        type="checkbox"
                                        className="toggle"
                                        onClick={handleDark}
                                        checked={
                                             mode === "light" ? false : true
                                        }
                                   /> */}
                                   <label className="cursor-pointer grid place-items-center">
                                        <input
                                             type="checkbox"
                                             value="synthwave"
                                             className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                                             onClick={handleDark}
                                             checked={
                                                  mode === "light"
                                                       ? false
                                                       : true
                                             }
                                        />
                                        <svg
                                             className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="14"
                                             height="14"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                        >
                                             <circle cx="12" cy="12" r="5" />
                                             <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                        </svg>
                                        <svg
                                             className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="14"
                                             height="14"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                        >
                                             <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                   </label>

                                   {/* 00000000000000000000000000 */}
                                   <div className="dropdown dropdown-end"></div>
                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default Navbar;
