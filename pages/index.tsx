import React, { useState, useEffect } from "react";
import { Block, LoadingBar, Message } from "vcc-ui";

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
    fetch("api/car.json")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setStatus(StatusCodes.LOADED);
      })
      .catch((error) => {
        setStatus(StatusCodes.ERROR);
        console.log(error);
      });
  }, []);

  if (status === StatusCodes.LOADING) return <LoadingBar isLoading />;
  if (status === StatusCodes.ERROR)
    return (
      <Block extend={{ textAlign: "center" }}>
        <Message type="error">
          Something went wrong. Please try again later.
        </Message>
      </Block>
    );

  return <CarsCarousel items={cars} />;
}

export default HomePage;
