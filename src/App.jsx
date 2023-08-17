/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import "./App.css";
import SideMenu from "./companents/SideMenu";
import { Routes, Route } from "react-router-dom";
import ServisPage from "./pages/Servis";
import HesapPage from "./pages/Hesap";
import DagitimPage from "./pages/Dagitim";
import BeklenenPage from "./pages/Beklenen";







const Home = () => {
  return <h1>Ana Sayfa</h1>
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
        <Route path="/servis" element={<ServisPage />} />
        <Route path="/bekleme" element={<BeklenenPage />} />
        <Route path="/dagitim" element={<DagitimPage />} />
        <Route path="/hesap" element={<HesapPage />} />
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
