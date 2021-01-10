import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {useStateValue} from '../../../../StateProvider';
import { actionTypes } from "../../../../reducer";

const useStyles = makeStyles({
  root: {
    background: "#808080",
    borderRadius: 3,
    border: 0,
    height: 35,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
});

function Search({ hideButtons = false }) {
  const classes = useStyles();
  const [{}, dispath] = useStateValue();
  const history = useHistory();
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();

    console.log("you hit search", input);
    history.push("/search");
    dispath({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button
            type="submit"
            onClick={search}
            classes={{
              root: classes.root,
              label: classes.label,
            }}
            variant="contained"
          >
            Google Search
          </Button>
          <Button
            classes={{
              root: classes.root,
              label: classes.label,
            }}
            variant="contained"
          >
            I'm feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            classes={{
              root: classes.root,
              label: classes.label,
            }}
            variant="contained"
          >
            Google Search
          </Button>
          <Button
            className="search__buttonsHidden"
            classes={{
              root: classes.root,
              label: classes.label,
            }}
            variant="contained"
          >
            I'm feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
