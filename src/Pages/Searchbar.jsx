import React, { useContext, useState } from "react";
import "./Searchbar.css";
import { IoIosSearch } from "react-icons/io";
import { SearchContext } from "../Context/SearchContext";

const Searchbar = () => {
  const [search, setSerach] = useState("");
  const nameValue = useContext(SearchContext);
  console.log(nameValue);

  const handleSearch = () => {
    console.log("hi");
  };

  return (
    <div className="searchContainer">
      <input
        type="search"
        placeholder="Search here.."
        className="inputBox"
        value={search}
        onChange={(e) => setSerach(e.target.value)}
      />
      <div className="searchIconDiv">
        <IoIosSearch className="searchIcon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Searchbar;
