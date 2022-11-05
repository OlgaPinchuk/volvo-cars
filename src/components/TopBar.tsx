import { FC } from "react";
import { Block, Text, useTheme } from "vcc-ui";

export const TopBar: FC = () => {
  const theme = useTheme();
  return (
    <Block
      extend={{
        padding: "20px 0",
        marginBottom: "50px",
        textAlign: "center",
        background: theme.color.background.secondary,
      }}
    >
      <Text variant="cook">Volvo Assignment</Text>
    </Block>
  );
};
