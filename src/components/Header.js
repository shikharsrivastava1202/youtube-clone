import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
// import { Link, json } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { TfiSearch } from "react-icons/tfi";
import { cachedResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  //API debouncing , cached API calls , shows suggestions

  useEffect(() => {
    const timer = setTimeout(() => {
      //searching for cache for specific search query
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        //else make the API call for search query
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //updating the search cache
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full grid grid-flow-col p-3 m-2 shadow-lg ">
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="right-0 px-4 py-1"
            >
              ╳
            </button>
          )}
          <button className="border border-gray-400 py-1 px-6 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div
            className="absolute bg-white ml-48 py-2 px-1 w-[30rem] shadow-lg 
          rounded-lg border border-gray-100"
          >
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex items-center py-2 px-2 shadow-sm hover:bg-gray-100"
                >
                  <TfiSearch size={15} /> <span className="pl-3">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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
