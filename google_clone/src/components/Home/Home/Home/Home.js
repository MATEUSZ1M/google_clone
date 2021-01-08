import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import Search from "../Search/Search"

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
        <img
          src="https://png2.cleanpng.com/sh/f0d23ad96818f7af24b6f70060724cea/L0KzQYm3V8A0N5J9j5H0aYP2gLBuTfdwd5hxfZ91b3fyPbj2jBdtbV5uhdNwZYOwd7F2hBxmNZoyh592b4TrdcO0lPVzbaRmRadrM3HpRoTtgcQ2amI8RqM9OEKzR4m7UcU0OGYASKkDM0a6Q4O1kP5o/kisspng-google-logo-google-images-google-i-o-mother-teresa-5b3af63fa45b17.1482078415305907836732.png"
          alt="google logo"
        />
        {/* Search */}
        <Search/>
      </div>
    </div>
  );
}

export default Home;
