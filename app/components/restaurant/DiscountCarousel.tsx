import { Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Divider, Flex, Icon, Text } from "native-base";
import { useState } from "react";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
import Carousel from "react-native-reanimated-carousel";

type DemoData = {
  headline: string;
  subText: string;
};

const DEMO_DATA: DemoData[] = [
  {
    headline: "40% OFF up to $80",
    subText: "Use code CRAVINGS | above $129",
  },
  {
    headline: "40% OFF up to $80",
    subText: "Use code CRAVINGS | above $129",
  },
  {
    headline: "40% OFF up to $80",
    subText: "Use code CRAVINGS | above $129",
  },
  {
    headline: "40% OFF up to $80",
    subText: "Use code CRAVINGS | above $129",
  },
  {
    headline: "40% OFF up to $80",
    subText: "Use code CRAVINGS | above $129",
  },
];

const DiscountCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(1);

  return (
    <Flex>
      <Divider bgColor="blue.500" mt="12px" />
      <Icon
        name="shopping-sale"
        as={Fontisto}
        color="blue.500"
        size="24px"
        zIndex={1}
        position="absolute"
        left="50%" // TODO: Off center by 12px because of negative transform - give background
      />
      <LinearGradient
        colors={["#bfdbfe", "white"]}
        style={{ alignItems: "center", paddingTop: 12, height: 90 }}
      >
        <Carousel
          loop
          width={300}
          height={60}
          data={DEMO_DATA}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log("current index:", index)}
          onProgressChange={(_, absoluteProgress) => {
            setCarouselIndex(Math.round(absoluteProgress));
          }}
          renderItem={({ item }) => (
            <Flex alignItems="center">
              <Text fontWeight="bold" fontSize="16px">
                {item.headline}
              </Text>
              <Text color="gray.400">{item.subText}</Text>
            </Flex>
          )}
        />
        <Flex alignSelf="center">
          <AnimatedDotsCarousel
            length={DEMO_DATA.length}
            currentIndex={carouselIndex}
            maxIndicators={DEMO_DATA.length}
            activeIndicatorConfig={{
              color: "black",
              margin: 3,
              opacity: 0.5,
              size: 8,
            }}
            inactiveIndicatorConfig={{
              color: "white",
              borderColor: "black",
              borderWidth: 1,
              margin: 3,
              opacity: 1,
              size: 8,
            }}
            decreasingDots={[
              {
                config: {
                  color: "white",
                  borderColor: "black",
                  borderWidth: 1,
                  margin: 3,
                  opacity: 1,
                  size: 8,
                },
                quantity: 1,
              },
              {
                config: { color: "white", margin: 3, opacity: 0.5, size: 8 },
                quantity: 1,
              },
            ]}
          />
        </Flex>
      </LinearGradient>
    </Flex>
  );
};

export default DiscountCarousel;
