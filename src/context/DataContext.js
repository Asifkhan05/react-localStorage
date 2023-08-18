import { createContext, useState, useEffect } from "react";
import { format } from "date-fns/esm";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../Hooks/useWindowSize";

let DataContext = createContext({});

export let DataProvider = ({ children }) => {
  let [posts, rePost] = useState(JSON.parse(localStorage.getItem("wow") || []));
  let [search, reSearch] = useState("");
  let [searchEl, reSearchEl] = useState([]);
  let [newTitle, reNewTitle] = useState("");
  let [newBody, reNewBody] = useState("");
  let navi = useNavigate();
  let [editNewTitle, reEditNewTitle] = useState("");
  let [editNewBody, reEditNewBody] = useState("");
  let { width } = useWindowSize();

  useEffect(() => {
    let hand = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    reSearchEl(hand.reverse());
  }, [posts, search]);

  let add = async (e) => {
    e.preventDefault();
    let id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    let datetime = format(new Date(), "MMMM dd,yyyy pp");

    let newPost = { id, title: newTitle, datetime, body: newBody };

    let list = [...posts, newPost];
    localStorage.setItem("wow", JSON.stringify(list));
    rePost(list);
    reNewBody("");
    reNewTitle("");
    navi("/");
  };
  let ha = (id) => {
    let dd = posts.filter((post) => post.id !== id);
    rePost(dd);
    localStorage.setItem("wow", JSON.stringify(dd));
    navi("/");
  };
  let has = (id) => {
    let datetime = format(new Date(), "MMMM dd,yyyy pp");
    let newPost = { id, title: editNewTitle, datetime, body: editNewBody };

    let sd = posts.map((post) => (post.id === id ? { ...newPost } : post));
    localStorage.setItem("wow", JSON.stringify(sd));
    rePost(sd);
    reEditNewTitle("");
    reEditNewBody("");
    navi("/");
  };

  return (
    <DataContext.Provider
      value={{
        width,
        search,
        reSearch,
        searchEl,
        add,
        reNewTitle,
        newBody,
        newTitle,
        reNewBody,
        posts,
        ha,
        has,
        editNewTitle,
        editNewBody,
        reEditNewBody,
        reEditNewTitle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
