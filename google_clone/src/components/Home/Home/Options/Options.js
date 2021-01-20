import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
import MovieIcon from '@material-ui/icons/Movie';
import ShopIcon from '@material-ui/icons/Shop';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import "./Options.css";

function Options() {
  return (
    <div className="searchPage__options">
      <div className="searchPage__optionsLeft">
        <div className="searchPage__option">
          <SearchIcon />
          <Link to="/all">All</Link>
        </div>
        <div className="searchPage__option">
          <AnnouncementIcon />
          <Link to="/news">News</Link>
        </div>
        <div className="searchPage__option">
          <ImageIcon />
          <Link to="/images">Images</Link>
        </div>
        <div className="searchPage__option">
          <RoomIcon />
          <Link to="/maps">Maps</Link>
        </div>
        <div className="searchPage__option">
          <MovieIcon />
          <Link to="/videos">Videos</Link>
        </div>
        <div className="searchPage__option">
          <ShopIcon />
          <Link to="/shop">Shopping</Link>
        </div>
        <div className="searchPage__option">
          <MoreVertIcon />
          <Link to="/more">More</Link>
        </div>
      </div>
      <div className="searchPage__optionsRight">
        <div className="searchPage__option">
          <Link to="/settings">Settings</Link>
        </div>
        <div className="searchPage__option">
          <Link to="/tools">Tools</Link>
        </div>
      </div>
    </div>
  );
}

export default Options;
