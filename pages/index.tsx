import React, { useState, useEffect } from "react";
import { Block, LoadingBar, Message } from "vcc-ui";

import { ICar, StatusCodes } from "types/types";
import { CarsList } from "../src/components/CarsList";

function HomePage() {
  // Local state
  const [status, setStatus] = useState(StatusCodes.LOADING);
  const [cars, setCars] = useState(Array<ICar>());

  const ENDPOINT = "api/cars.json";

  useEffect(() => {
    setStatus(StatusCodes.LOADING);
    fetch(ENDPOINT)
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

  return <CarsList items={cars} />;
}

export default HomePage;
