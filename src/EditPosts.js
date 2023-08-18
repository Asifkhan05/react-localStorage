import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

function EditPosts() {
  let { has, posts, editNewTitle, editNewBody, reEditNewBody, reEditNewTitle } =
    useContext(DataContext);

  let { id } = useParams();
  let post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      reEditNewBody(post.body);
      reEditNewTitle(post.title);
    }
  }, [post, reEditNewBody, reEditNewTitle]);

  return (
    <main className="NewPost">
      {editNewBody && (
        <>
          <h2>Edit Page</h2>
          <form
            className="newPostForm"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="ti">Title</label>
            <input
              type="text"
              required
              value={editNewTitle}
              onChange={(e) => reEditNewTitle(e.target.value)}
            />
            <label htmlFor="ti">Body</label>
            <textarea
              type="text"
              required
              value={editNewBody}
              onChange={(e) => reEditNewBody(e.target.value)}
            />
            <button onClick={() => has(post.id)}>Submit</button>
          </form>
        </>
      )}
    </main>
  );
}

export default EditPosts;
