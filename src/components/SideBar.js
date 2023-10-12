import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import "./style/SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            {/* <Link to="/">Home</Link> */}

            <a href="/">Home</a>
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                {/* <Link to="/">Question</Link> */}

                <a href="/">Question</a>
              </div>

              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <StarsIcon />
                {/* <Link to="/">Explore Collectives</Link> */}

                <a href="/">Explore Collectives</a>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <WorkIcon />
              {/* <Link to="/">Companies</Link> */}
              <a href="/">Trending</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;