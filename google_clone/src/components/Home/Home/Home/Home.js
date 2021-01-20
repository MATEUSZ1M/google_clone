import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import Search from "../Search/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* Link  about*/}
          <Link to="/about">About</Link>
          {/* Link  store*/}
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          {/* Link Gmail*/}
          <Link to="/gmail">Gmail</Link>
          {/* Link Images*/}
          <Link to="/images">Images</Link>
          {/* Link Apps*/}
          <Link to="apps">
            <AppsIcon />
          </Link>
          {/* Avatar */}
          <Link to="profile">
            <Avatar />
          </Link>
        </div>
      </div>
      <div className="home__body">
        <div className="home__logo">
          <img
            src="https://i.postimg.cc/BvYGsZH2/640px-Google-2015-logo-svg.png"
            alt="google logo"
          />
          <img
            className="home__reactLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react logo"
          />
        </div>
        {/* Search */}
        <Search />
      </div>
    </div>
  );
}

export default Home;
