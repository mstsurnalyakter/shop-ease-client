import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "../pages/NavBar";
const Main = () => {
  return (
    <div className="font-poppins dark:bg-blue-gray-900  duration-100">
      <NavBar />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-7 lg:px-2 mt-10 mb-10 min-h-[calc(100vh-432px)]">
        <Outlet />
      </div>
      {/* <Footer /> */}
      <Toaster />
    </div>
  );
};

export default Main;
