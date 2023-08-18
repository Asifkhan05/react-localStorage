import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import Missing from "./Missing";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Postupdate from "./Postupdate";
import EditPosts from "./EditPosts";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<Postupdate />} />
          </Route>
          <Route path="editposts/:id" element={<EditPosts />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
