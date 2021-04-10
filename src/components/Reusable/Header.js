import React from "react";
import Home from "../Home";
import Logo from "../Logo";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <Logo />

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-3 ml-4 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="./">
                <h4 className="mt-3">Home</h4>
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
