import React, { useState } from "react";
import "./Banner.css";
// import {Button} from '@material-ui/core'
import Button from "@mui/material/Button";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
function Banner() {
  let navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showText, setShowText] = useState("Search Dates");
  return (
    <div className="banner w-full">
      <div className="banner__search">
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => {
            setShowSearch(!showSearch);
            if (showSearch === false) {
              setShowText("Clear");
            } else {
              setShowText("Search Date");
            }
          }}
        >
          {showText}
        </Button>
        {showSearch && <Search />}
      </div>
      {/* <h1>hello i am banner</h1> */}
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => navigate("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
