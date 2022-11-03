import { FC } from "react";
import { Block } from "vcc-ui";

import { ComingSoon } from "components/ComingSoon";
import { BackButton } from "components/BackButton";

const LearnPage: FC = () => {
  return (
    <Block extend={{ marginLeft: 20, marginRight: 20 }}>
      <BackButton />
      <ComingSoon />
    </Block>
  );
};

export default LearnPage;
