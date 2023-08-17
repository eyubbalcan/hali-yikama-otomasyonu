/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import logo from "../img/obs.jpg";
import MenuItem from "./MenuItem";

const menuItems = [
  { name: "Anasayfa", to: "/", iconClassName: "bi bi-house-door-fill" },
  {
    name: "Servis",
    
    to: "/servis",
    iconClassName: "bi bi-bus-front",
    subMenus: [
      { name: "Alınıcak", to: "/alinicak" },
      { name: "Bekleme", to: "/bekleme" },
      { name: "Dağıtım", to: "/dagitim" },
    ],
  },
  { name: "Hesap", to: "/hesap", iconClassName: "bi bi-calculator" },
];

export default function SideMenu(props) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
    props.onCollapse(inactive);
  }, [inactive]);
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* <div className="logo-yazi">BalPos</div> */}
        <div
          onClick={() => {
            setInactive(!inactive);
          }}
          className="toggle-menu-btn"
        >
          <i className="bi bi-align-end"></i>
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <i className="bi bi-search"></i>
        </button>
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItems, index) => (
            <MenuItem
              key={index}
              name={menuItems.name}
              exact={menuItems.exact}
              to={menuItems.to}
              subMenus={menuItems.subMenus || []}
              iconClassName={menuItems.iconClassName}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-house-door-fill"></i>
              </div>
              <span>Ana Sayfa</span>
            </a>
          </li>
          <MenuItem
            name={"Servis"}
            subMenus={[
              { name: "Alınıcak" },
              { name: "Bekleme" },
              { name: "Dağıtım" },
            ]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-calculator"></i>
              </div>
              <span> Hesap</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="side-menu-footer"></div>
    </div>
  );
}

// import { Routes, Route, Link, NavLink } from "react-router-dom";
// import Home from "../../pages/Home";
// import Contact from "../../pages/Contact";
// import Blog from "../../pages/Blog";
// import "./Sidebar.css";

// function Sidebar() {
//   return (
//     <>
//       <nav className="sidebar">
//         <NavLink to="/" style={({ isActive }) => ({})}>
//           Anasayfa
//         </NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//         <NavLink to="/blog">Blog</NavLink>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//         <Route path="/blog" element={<Blog />}></Route>
//       </Routes>
//     </>
//   );
// }

// export default Sidebar;
