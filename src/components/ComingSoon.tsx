import { FC } from "react";
import { Flex, Text } from "vcc-ui";

export const ComingSoon: FC = () => {
  return (
    <Flex
      extend={{
        margin: "0 auto",
        height: "50vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "20",
      }}
    >
      <Text as="h1" variant="cook">
        The page is under construction
      </Text>
      <Text as="h3" variant="ootah">
        We are working hard to provide you the best user experience!
      </Text>
    </Flex>
  );
};
