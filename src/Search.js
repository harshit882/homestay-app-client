import React, { useState } from "react";
// Date picker component
import "./Search.css";
import { useNavigate } from "react-router-dom";
// import { Button } from '@material-ui/core';
import Button from "@mui/material/Button";
// import GroupIcon from "@mui/icons-material/Group";
import GroupIcon from "@mui/icons-material/Group";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css"; //theme style file

function Search() {
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //for selecting range of date at once
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handelSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      {/* <h2>I am a date</h2> */}
      <DateRangePicker ranges={[selectionRange]} onChange={handelSelect} />
      <h2>
        Number of guests
        <GroupIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate("/search")}>Search Destinations </Button>
    </div>
  );
}

export default Search;
