import React from "react";
import { MdHomeFilled, MdLibraryAdd } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { BiTrendingUp, BiNews } from "react-icons/bi";
import { AiFillShopping, AiFillBulb } from "react-icons/ai";
import { RiClapperboardFill } from "react-icons/ri";
import { FiRadio } from "react-icons/fi";
import { SiYoutubegaming } from "react-icons/si";
import { GiTrophy, GiHanger } from "react-icons/gi";
import { BsMusicNote } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  //subscribing to the store
  //not whole store only specific part of the store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //this is known as early return
  if (!isMenuOpen) return null;

  return (
    <div className=" h-screen p-5 shadow-lg w-48">
      <ul className="pb-5">
        <li className="flex items-center pb-2">
          <MdHomeFilled size={20} />
          <Link to={"/"}>
            <span className="ml-1">Home</span>
          </Link>
        </li>

        <li className="flex items-center pb-2">
          <img
            alt="shortsLogo"
            src="https://hvarun13.github.io/youtube-project/static/media/youtubeShorts.a2ec06322c2324a6e1dd.png"
            className="h-4 mr-2"
          ></img>
          <span>Shorts</span>
        </li>
        <li className="flex items-center">
          <MdSubscriptions />
          <span className="ml-1">Subscription</span>
        </li>
      </ul>
      <hr />
      <ul className="py-5">
        <li className="flex items-center pb-2">
          <MdLibraryAdd />
          <span className="ml-1">Library</span>
        </li>
        <li className="flex items-center">
          <RiHistoryFill />
          <span className="ml-1">History</span>
        </li>
      </ul>
      <hr />
      <h1 className="pt-5 font-bold">Explore</h1>
      <ul>
        <li className="flex items-center pt-2">
          <BiTrendingUp />
          <span className="ml-1">Trending</span>
        </li>
        <li className="flex items-center pt-2">
          <AiFillShopping />
          <span className="ml-1">Shopping</span>
        </li>
        <li className="flex items-center pt-2">
          <BsMusicNote />
          <span className="ml-1">Music</span>
        </li>
        <li className="flex items-center pt-2">
          <RiClapperboardFill />
          <span className="ml-1">Movies </span>
        </li>
        <li className="flex items-center pt-2">
          <FiRadio />
          <span className="ml-1">Live</span>
        </li>
        <li className="flex items-center pt-2">
          <SiYoutubegaming />
          <span className="ml-1">Gaming</span>
        </li>
        <li className="flex items-center pt-2">
          <BiNews />
          <span className="ml-1">News</span>
        </li>
        <li className="flex items-center pt-2">
          <GiTrophy />
          <span className="ml-1">Sports</span>
        </li>
        <li className="flex items-center pt-2">
          <AiFillBulb />
          <span className="ml-1">Learning</span>
        </li>
        <li className="flex items-center pt-2">
          <GiHanger />
          <span className="ml-1">Fashion </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
