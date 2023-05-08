import React, { useEffect, useState } from "react";
import "./SearchPage.css";
// import { Button } from '@material-ui/core'
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";
function SearchPage() {
  const [hotels, setHotels] = useState([]);
  let url =
    "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json";
  async function hotelData(url) {
    let data = await fetch(url);
    let hotelList = await data.json();
    setHotels(hotelList);
  }

  useEffect(() => {
    // debugger
    hotelData(url);
  }, [url]);

  return (
    <div className="SearchPage">
      <div className="searchPage_info">
        <p>62 stays 26 to 30 august</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">cancellation facility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {hotels.map((currEle) => {
        return (
          <SearchResult
            img={currEle.imageUrl}
            location="Private room in outskirts"
            title={currEle.name}
            description="1 guest . 1 bedroom .1 bed .1.5 shared bathrooms . Wifi . kitchen . Parking facility"
            star={4.7}
            price={currEle.price}
            total="4000/total"
          />
        );
      })}
    </div>
  );
}

export default SearchPage;
