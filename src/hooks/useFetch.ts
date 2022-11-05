import { useState, useEffect } from "react";
import { StatusCodes } from "types/types";

const useFetch = <T>(url: string): [Array<T> | null, StatusCodes] => {
  const [data, setData] = useState<Array<T> | null>(null);
  const [status, setStatus] = useState(StatusCodes.LOADING);

  useEffect(() => {
    setStatus(StatusCodes.LOADING);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setStatus(StatusCodes.LOADED);
      })
      .catch((error) => {
        setStatus(StatusCodes.ERROR);
        console.error(error);
      });
  }, [url]);
  return [data, status];
};

export default useFetch;
