import { Block, LoadingBar, Message } from "vcc-ui";

import { ICar, StatusCodes } from "types/types";
import { CarsList } from "../src/components/CarsList";
import useFetch from "hooks/useFetch";

function HomePage() {
  const ENDPOINT = "api/cars.json";
  const [cars, status] = useFetch<ICar>(ENDPOINT);

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
}

export default HomePage;
