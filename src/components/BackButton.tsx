import { FC } from "react";
import { IconButton } from "vcc-ui";
import { useRouter } from "next/router";

export const BackButton: FC = () => {
  const router = useRouter();

  return (
    <IconButton
      aria-label="Navigate back"
      iconName="navigation-chevronback"
      onClick={() => router.back()}
      variant="outline"
    />
  );
};
