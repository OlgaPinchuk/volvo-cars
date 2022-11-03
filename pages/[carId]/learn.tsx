import { FC } from "react";
import { Block, Text } from "vcc-ui";
import { useRouter } from "next/router";

const LearnPage: FC = () => {
  const router = useRouter();
  console.log("router", router);
  const { carId } = router.query;

  return (
    <>
      <Block>
        <Text>Learn more</Text>
      </Block>
    </>
  );
};

export default LearnPage;
