import { FC, useState } from "react";
import { Flex, Block, View, Spacer, Click } from "vcc-ui";
import Image from "next/image";
import { useSpringCarousel } from "react-spring-carousel";

import { Car } from "./Car";
import { ICar } from "../interfaces/interfaces";

type iProps = {
  items: ICar[];
};

export const CarsCarousel: FC<iProps> = ({ items }: iProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    withThumbs: true,
    itemsPerSlide: 4,
    gutter: 15,
    startEndGutter: 24,
    items: items.map((item, index) => ({
      id: item.id,
      renderItem: <Car details={item}></Car>,
      renderThumb: (
        <div className={`${index === activeItem ? "active" : ""}`}></div>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.index);
    }
  });

  return (
    <Block
      extend={{
        maxWidth: "80vw",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {carouselFragment}
      <View
        extend={{
          display: "none",
          "@media (max-width: 480px)": {
            display: "flex",
          },
        }}
      >
        {thumbsFragment}
      </View>
      <Flex
        extend={{
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "flex-end",
          "@media (max-width: 480px)": {
            display: "none",
          },
        }}
      >
        <Click
          onClick={slideToPrevItem}
          disabled={activeItem === 0}
          type="button"
          style={{
            cursor: "auto",
          }}
        >
          <Image
            src="/images/icons/chevron-circled.svg"
            width={40}
            height={40}
            alt="Previous Slide"
            style={{
              transform: "scale(-1, 1)",
              transformOrigin: "center",
            }}
          />
        </Click>
        <Spacer />
        <Click
          style={{
            cursor: "auto",
          }}
          type="button"
          onClick={slideToNextItem}
          disabled={activeItem === items.length - 1}
        >
          <Image
            src="/images/icons/chevron-circled.svg"
            width={40}
            height={40}
            alt="Next Slide"
          />
        </Click>
      </Flex>
    </Block>
  );
};
