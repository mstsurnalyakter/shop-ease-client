import { useEffect, useState } from "react";
import logo from "/logo.png";
import { Tooltip } from "react-tooltip";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

function NavList() {
  const { user } = useAuth();
  return (
    <List className="mt-4 items-center mb-6 gap-4 lg:gap-2 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#07BE65] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/products"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#07BE65] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Products
      </NavLink>

    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => toast.error(error.message));
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="shadow-lg sticky top-0 z-50 dark:bg-slate-900 duration-100">
      <Navbar className="mx-auto max-w-7xl  shadow-none rounded-none px-3 lg:px-2 pt-4  mb-6 lg:py-5">
        <div className="flex items-center justify-between">
          <Typography className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center">
            <Link className="flex items-center justify-center gap-1" to={"/"}>
              <img className="w-12" src={logo} alt="" />
              <span className="text-black font-bold text-xl">ShopEase</span>
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-4 lg:flex items-center">
            <div>
              {!user && (
                <div className="flex gap-2">
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#07BE65] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                        : "text-[#131313CC] border border-[#07BE65] px-3 py-1 rounded-lg"
                    }
                  >
                    Login
                  </NavLink>
                </div>
              )}
              {user && (
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleLogOut()}
                    className="bg-[#d53b4b] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                  >
                    Logout
                  </button>
                  <img
                    className="rounded-full w-10 h-10 border-2 border-[#d53b4b]"
                    src={user?.photoURL}
                    alt="profile image"
                    id="profile"
                  />
                  <Tooltip
                    anchorSelect="#profile"
                    content={user?.displayName}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Theme Toggle Buttons */}
            <div className=" bg-[#07BE65] items-center justify-center flex flex-wrap rounded">
              {options?.map((opt) => (
                <button
                  onClick={() => setTheme(opt.text)}
                  key={opt.text}
                  className={`w-8 h-8 leading-9 text-xl rounded-full mr-1 ${
                    theme === opt.text ? "text-blue-600" : ""
                  }`}
                >
                  <ion-icon name={opt.icon}></ion-icon>
                </button>
              ))}
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <div className="flex gap-5">
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                </div>
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          <NavList />
          {user && (
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => handleLogOut()}
                className="bg-[#d53b4b] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
              >
                Logout
              </button>
              <img
                id="profile"
                className="rounded-full w-10 h-10 border-2 border-[#d53b4b]"
                src={user?.photoURL}
                alt="profile image"
              />
              <Tooltip anchorSelect="#profile" content={user?.displayName} />
            </div>
          )}

          <div className="flex items-center justify-center"></div>
          <div className="">
            {!user && (
              <div className="flex gap-5 flex-col">
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#07BE65] px-3 py-1 flex items-center mx-auto justify-center  text-white  rounded-lg"
                      : "text-[#131313CC] border flex items-center mx-auto justify-center border-[#07BE65] px-3 py-1 rounded-lg"
                  }
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
