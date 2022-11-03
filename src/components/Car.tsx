import { FC } from "react";
import { Block, Link, Text, View, useTheme } from "vcc-ui";
import Image from "next/image";

import { ICar } from "../interfaces/interfaces";

type iProps = {
  details: ICar;
  key?: string;
};

export const Car: FC<iProps> = ({ details }: iProps) => {
  const theme = useTheme();
  const { id, modelName, imageUrl, bodyType, modelType } = details;
  return (
    <View>
      <View
        extend={{
          backgroundColor: theme.color.background.primary,
          width: {
            default: "60vw",
            fromM: 380,
          },
        }}
      >
        <View extend={{ paddingBottom: 15, gap: 10, flexGrow: 1 }}>
          <Text
            variant="bates"
            subStyle="emphasis"
            extend={{
              color: theme.color.foreground.secondary,
              textTransform: "uppercase",
            }}
          >
            {bodyType}
          </Text>
          <View
            extend={{
              flexWrap: "wrap",
              flexDirection: "row",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Text
              extend={{ marginRight: 4 }}
              variant="columbus"
              subStyle="emphasis"
              aria-label="car name"
            >
              {modelName}
            </Text>
            <Text
              variant="columbus"
              extend={{
                color: theme.color.foreground.secondary,
              }}
            >
              {modelType}
            </Text>
          </View>
        </View>
        <Block
          extend={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
          }}
        >
          <Image src={imageUrl} alt={modelName} layout="fill" priority={true} />
        </Block>
      </View>
      <View
        extend={{
          padding: 5,
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Block extend={{ margin: "0 12px" }}>
          <Link
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              textTransform: "uppercase",
            }}
            href={`/${id}/learn`}
            arrow="right"
          >
            LEARN
          </Link>
        </Block>
        <Block extend={{ margin: "0 12px" }}>
          <Link
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              textTransform: "uppercase",
            }}
            href={`/${id}/shop`}
            arrow="right"
          >
            SHOP
          </Link>
        </Block>
      </View>
    </View>
  );
};
