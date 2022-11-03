import React from "react";
import { Block, Button } from "vcc-ui";
import { ICar } from "../interfaces/interfaces";

type iProps = {
  items: ICar[];
};
export const CarsList: React.FC<iProps> = ({ items }: iProps) => {
  return (
    <Block extend={{ padding: 20 }}>
      <Button>Click me!</Button>
    </Block>
  );
};
