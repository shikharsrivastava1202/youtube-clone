import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1 h-10  ">
        <img
          onClick={() => toggleHandler()}
          className="cursor-pointer h-8"
          alt="hamburger"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuq0MCuvCSEAako0Fx2Zf7YmyoE_ZuElcSLZPk4M5Uc7_NlEuRH7jN44-F8UJOraGLp18&usqp=CAU"
        />
        <img
          className="ml-4 cursor-pointer"
          alt="youtube"
          src="https://image.shutterstock.com/image-photo/image-260nw-2310134969.jpg"
        />
      </div>
      <div className=" col-span-10 ">
        <div className="pl-48 flex">
          <input
            placeholder="Search"
            className="w-1/2 border border-gray-400 p-1 pl-5 rounded-l-full "
          />
          <button className="border border-gray-400 py-1 px-6 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-1 cursor-pointer">
        <img
          className="h-8"
          alt="user icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
