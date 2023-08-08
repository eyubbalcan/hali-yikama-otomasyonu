import { useState } from "react";
import "./App.css";
import SideMenu from "./companents/SideMenu";
import { Routes, Route, Link, NavLink, Switch } from "react-router-dom";

const Home = () => {
  return <h1>Ana Sayfa</h1>
};
const Servis = () => {
  return <h1>Servis</h1>
};
const Alinacak = () => {
  return <h1>Alınacak</h1>
};
const Beklenen = () => {
  return <h1>Beklenen</h1>
};
const Dagitilicak = () => {
  return <h1>Dağıtılıcak</h1>
};
const Hesap = () => {
  return <h1>Hesap</h1>
};

function App() {
  const [inactive, setInactive] = useState(false);
  return <div className="App">


    <SideMenu onCollapse={(inactive) => {
      setInactive(inactive)
    }} />

    <div className={`container ${inactive ? 'inactive' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servis" element={<Servis />} />
        <Route path="/alinicak" element={<Alinacak />} />
        <Route path="/bekleme" element={<Beklenen />} />
        <Route path="/dagitim" element={<Dagitilicak />} />
        <Route path="/hesap" element={<Hesap />} />
      </Routes>
    </div>
  </div>

}


export default App;




    // {/* <>
    //   <nav className="sidebar">
    //     <NavLink to="/" style={({ isActive }) => ({})}>
    //       Anasayfa
    //     </NavLink>
    //     <NavLink to="./pages/Contact.j">Contact</NavLink>
    //     <NavLink to="./pages/Blog.js">Blog</NavLink>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="./pages/Contact.js" element={<Servis />}></Route>
    //     <Route path="./pages/Blog.js" element={<Hesap />}></Route>
    //   </Routes>
    // </> */}
