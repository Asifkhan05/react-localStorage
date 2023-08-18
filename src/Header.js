import React, { useContext } from "react";
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa";
import DataContext from "./context/DataContext";

function Header() {
  let { width } = useContext(DataContext);
  return (
    <header className="Header">
      <h2>QueadBooks</h2>
      {width < 750 ? (
        <FaMobileAlt />
      ) : width < 950 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
}

export default Header;
