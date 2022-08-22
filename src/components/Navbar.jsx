import React from "react";
import logo from "../images/logo_new.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="140" height="100"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Find an Agency
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Floor Plans
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Guides
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Market Intelligence
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Agent Portals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
