import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCarByName } from "../../redux/actions";
import style from "./searchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(getCarByName(searchTerm));
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        placeholder="Buscar..."
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
