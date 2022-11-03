import { FC } from "react";
import { Block, Text } from "vcc-ui";

export const TopBar: FC = () => {
  const style = ({ theme }) => ({
    padding: "20px 0",
    marginBottom: "50px",
    textAlign: "center",
    background: theme.color.background.secondary,
  });

  return (
    <Block extend={style}>
      <Text variant="cook">Volvo Assignment</Text>
    </Block>
  );
};
