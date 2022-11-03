// // NPM modules
import React, { useState, useEffect } from "react";
import { ICar } from "../src/interfaces/interfaces";
import { CarsCarousel } from "../src/components/CarsCarousel";

const enum StatusCodes {
  LOADING,
  LOADED,
  ERROR,
}

function HomePage() {
  // Local state
  const [status, setStatus] = useState(StatusCodes.LOADING);
  const [cars, setCars] = useState(Array<ICar>());

  useEffect(() => {
    setStatus(StatusCodes.LOADING);
    fetch("api/cars.json")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setStatus(StatusCodes.LOADED);
      });
  }, []);

  if (status === StatusCodes.LOADING) return <p>Loading</p>;
  if (status === StatusCodes.ERROR) return <p>Error</p>;

  return <CarsCarousel items={cars} />;
}

export default HomePage;
