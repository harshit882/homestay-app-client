import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import { PlaceContext } from "./context/PlaceContext";
import Spinner from "./components/Spinner";
import Image from "./components/Image";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
function Home() {
  const { places, loading } = useContext(PlaceContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col justify-center items-center bg-slate-100">
      <Banner />
      <br />
      <div className="flex flex-wrap justify-center gap-6 m-10 p-5">
        {places?.map((place) => (
          <Card
            key={place._id}
            src={place.photos?.[0]}
            title={place.title}
            description={place.description}
            price={place.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
