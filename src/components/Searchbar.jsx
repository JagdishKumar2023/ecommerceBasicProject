import React, { useContext, useState } from "react";
import "./Searchbar.css";
import { IoIosSearch } from "react-icons/io";
import { SearchContext } from "../Context/SearchContext";
// import { SearchContext } from "../Context/SearchContext";

const Searchbar = () => {
  const { searchData, handleChange, handleSearch, handleEnterKey } =
    useContext(SearchContext);
  return (
    <div className="searchContainer">
      <input
        type="search"
        placeholder="eg. shirt, shoes, Jeans ,watch..."
        className="inputBox"
        value={searchData}
        onChange={handleChange}
        onKeyUp={handleEnterKey}
      />
      <div className="searchIconDiv">
        <IoIosSearch className="searchIcon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Searchbar;
