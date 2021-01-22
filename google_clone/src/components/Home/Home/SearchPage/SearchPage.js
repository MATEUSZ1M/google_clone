import React from "react";
import "./SearchPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStateValue } from "../../../../StateProvider";
import useGoogleSearch from '../../../../useGoogleSearch';
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Options from "../Options/Options";
import Footer from "../Footer/Footer";

const { useEffect } = React;
const trigger = {
  trigger: ".searchPage__result:nth-of-type(2)",
  start: "top 200",
  end: "top 100px",
  scrub: true,
};

function SearchPage() {
  //animations
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".searchPage__options", {
      y: -20,
      opacity: 0,
      scrollTrigger: trigger,
    });
  }, []);

  useEffect(() => {
    gsap.to(".search__buttons", {
      scrollTrigger: trigger,
      css: {
        marginTop: 0,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".searchPage__header", {
      // duration: duration,
      scrollTrigger: trigger,
      css: {
        paddingBottom: 0,
      },
    });
  }, []);

  const [{ term }] = useStateValue();
  //Live api call
  const {data} = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://i.postimg.cc/BvYGsZH2/640px-Google-2015-logo-svg.png"
            alt="google logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <Options />
        </div>
      </div>
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({''}
            {data?.searchInformation.formattedSearchTime}s ) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                {item.title}
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default SearchPage;
