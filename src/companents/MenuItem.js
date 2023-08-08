/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MenuItem({
  name,
  subMenus,
  exact,
  to,
  iconClassName,
  onClick,
}) {
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={onClick}>
      <NavLink exact to={to} onClick={() => setExpand(!expand)} className="menu-item">
        <div className="menu-icon">
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : undefined}
    </li>
  );
}
