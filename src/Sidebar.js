import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function Sidebar() {
  return (
    <>
      <nav>
        <NavLink to="/" style={({isActive}) => ({})}>Anasayfa</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </>
  );
}

export default Sidebar;
