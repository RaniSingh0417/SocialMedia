import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">JoGeek</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <button type="button" onClick={() => navigate("/")}>
          HOME
        </button>

        <button type="button" onClick={() => navigate("/about")}>
          ABOUT
        </button>
        <button type="button" onClick={() => navigate("/contact")}>
          CONTACT
        </button>
        <button type="button" onClick={() => navigate("/signup")}>
          SIGNUP
        </button>
        <button type="button" onClick={() => navigate("/login1")}>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
