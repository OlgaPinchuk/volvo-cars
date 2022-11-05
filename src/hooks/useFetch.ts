import { useState, useEffect } from "react";
import { StatusCodes } from "types/types";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
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
        console.log(error);
      });
  }, [url]);
  return [data, status] as const;
};

export default useFetch;
