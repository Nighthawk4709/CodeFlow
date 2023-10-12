import React from "react";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Trending from "../components/Trending";
import SideBar from "../components/SideBar";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <NavBar />
            <div className="content-container">
                <div className="sidebar"> {/* Use class name "sidebar" */}
                    <SideBar />
                </div>
                <div className="content"> {/* Use class name "content" */}
                    <Content />
                </div>
                <div className="trending"> {/* Use class name "trending" */}
                    <Trending />
                </div>
            </div>
        </div>
    );
}

export default Home;