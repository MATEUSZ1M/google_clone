import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

class Home extends Component {

  state = { visibl: false };

  render() {
    return (
      <div className="home">
        <div className="home__header">
          <div className="home__headerLeft">
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </div>
          <div className="home__headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <Link to="apps">
              <AppsIcon />
            </Link>
            <Avatar 
              onClick={() => {
                this.setState({ visible: !this.state.visible });
              }}
            />
          </div>
          {this.state.visible ? <Login /> : null}
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
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
