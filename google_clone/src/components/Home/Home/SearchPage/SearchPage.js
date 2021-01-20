import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../../../StateProvider'
// import useGoogleSearch from '../../../../useGoogleSearch';
import Response from "../../../../response"
import { Link } from 'react-router-dom';
import  Search  from '../Search/Search'

import SearchIcon from '@material-ui/icons/Search';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
import MovieIcon from '@material-ui/icons/Movie';
import ShopIcon from '@material-ui/icons/Shop';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Footer from "../Footer/Footer";


function SearchPage() {
  const[{term}, dispatch] = useStateValue();
  //Live api call
  // const {data} = useGoogleSearch(term);
  const data = Response

  console.log(data)
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to="/">
          <img 
            className="searchPage__logo"
            src="https://i.postimg.cc/BvYGsZH2/640px-Google-2015-logo-svg.png"
            alt="google logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons/>
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className='searchPage__option'>
                <SearchIcon/>
                <Link to='/all'>All</Link>
              </div>
              <div className="searchPage__option">
                <AnnouncementIcon/>
                <Link to='/news'>News</Link>
              </div> 
              <div className="searchPage__option">
                <ImageIcon/>
                <Link to='/images'>Images</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon/>
                <Link to='/maps'>Maps</Link>
              </div>
              <div className="searchPage__option">
                <MovieIcon/>
                <Link to='/videos'>Videos</Link>
              </div>
              <div className="searchPage__option">
                <ShopIcon/>
                <Link to='/shop'>Shopping</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon/>
                <Link to='/more'>More</Link>
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
        </div>
      </div>
      {true && (
      <div className='searchPage__results'>
        <p className='searchPage__resultCount'>
          About {data?.searchInformation.formattedTotalResults} results ( {data?.searchInformation.formattedSearchTime}s ) for {term} 
        </p>

        {data?.items.map(item => (
          <div className="searchPage__result">
            <a className="searchPage__resultLink" href={item.link}>
              {item.displayLink}
            </a>
            <a className="searchPage__resultTitle" href={item.link}>
              {item.title}
            </a>
            <p className="searchPage__resultSnippet">
              {item.snippet}
            </p>
          </div>
        ))}
      </div>
      )}
      <Footer/>
    </div>

  )
}

export default SearchPage
