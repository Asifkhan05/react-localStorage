import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

function Home() {
  let { searchEl } = useContext(DataContext);
  return (
    <main className="Home">
      {searchEl.length ? (
        <Feed posts={searchEl} />
      ) : (
        <p>No artical plece post your article</p>
      )}
    </main>
  );
}

export default Home;
