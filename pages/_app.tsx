// NPM modules
import { useState, useEffect } from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

// Project files
import { CarsList } from "../src/components/CarsList";
import API from "../src/services/api";

import { ICar } from "../src/interfaces/interfaces";
import "../public/css/styles.css";

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
    // API.getData(
    //   (data: ICar[]) => {
    //     setCars(data);
    //     setStatus(StatusCodes.LOADED);
    //   },
    //   (error: Error) => {
    //     setStatus(StatusCodes.ERROR);
    //     console.error(error);
    //   }
    // );
    setStatus(StatusCodes.LOADING);
    fetch("api/cars.json")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setStatus(StatusCodes.LOADED);
      });
  }, []);

  return (
    <StyleProvider>
      <ThemePicker variant="light">
        {status === StatusCodes.LOADED && <CarsList items={cars} />}
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
