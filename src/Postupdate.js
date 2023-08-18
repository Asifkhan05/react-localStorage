import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

function Postupdate() {
  let { posts, ha } = useContext(DataContext);
  let { id } = useParams();
  let post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/editposts/${post.id}`}>
              <button>Edit post</button>
            </Link>
            <button onClick={() => ha(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post not found</h2>
            <p>Well,Thats something error</p>
            <Link to="/">visit our page</Link>
          </>
        )}
      </article>
    </main>
  );
}

export default Postupdate;
