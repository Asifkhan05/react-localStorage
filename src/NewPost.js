import React, { useContext } from "react";
import DataContext from "./context/DataContext";

function NewPost() {
  let { add, reNewTitle, newBody, newTitle, reNewBody } =
    useContext(DataContext);
  return (
    <main className="NewPost">
      <form className="newPostForm" onSubmit={add}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          required
          id="title"
          value={newTitle}
          onChange={(e) => reNewTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <textarea
          required
          id="body"
          value={newBody}
          onChange={(e) => reNewBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default NewPost;
