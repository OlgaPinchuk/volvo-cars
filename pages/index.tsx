import { Block, LoadingBar, Message } from "vcc-ui";

import { CarsList } from "components/CarsList";
import useFetch from "hooks/useFetch";
import { ICar, StatusCodes } from "types/types";

const HomePage = () => {
  const API_URL = "api/cars.json";
  const [cars, status] = useFetch<ICar>(API_URL);

  if (status === StatusCodes.LOADING) {
    return <LoadingBar isLoading />;
  }
  if (status === StatusCodes.ERROR || !cars) {
    return (
      <Block extend={{ textAlign: "center" }}>
        <Message type="error">
          Something went wrong. Please try again later.
        </Message>
      </Block>
    );
  }

  return <CarsList items={cars!} />;
};

export default HomePage;
