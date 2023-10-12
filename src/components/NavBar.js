import React from 'react';
import "./style/NavBar.css"


function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="ericsson_codeFlow.png" alt="Stack Overflow Logo" width="50px" height="50px"/>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/questions">Questions</a>
        </li>
        <li className="navbar-item">
          <a href="/tags">Tags</a>
        </li>
        <li className="navbar-item">
          <a href="/trending">Trending</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="logIn">
        <button className="logIn">Login</button>
      </div>
      
      <div className="signUp">
        <button className="signUp">signUp</button>
      </div>
    </div>
  );
}

export default NavBar;