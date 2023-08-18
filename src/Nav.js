import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

function Nav() {
  let { search, reSearch } = useContext(DataContext);

  return (
    <nav className="Nav">
      <form onSubmit={(e) => e.preventDefault()} className="searchForm">
        <label htmlFor="seach"> Search Post</label>

        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => reSearch(e.target.value)}
          placeholder="Search Post"
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="post">Post</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
