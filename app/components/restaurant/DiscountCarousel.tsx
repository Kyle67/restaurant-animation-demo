import { Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Divider, Flex, Icon, Text } from "native-base";
import { useEffect, useState } from "react";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
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

  const height = useSharedValue<number | string>(100);
  const opacity = useSharedValue<number | string>(0);

  const onLoadAnimation = () => {
    height.value = withSpring(0, { duration: 3000 });
    opacity.value = withSpring(1, { duration: 3000 });
  };

  useEffect(() => {
    onLoadAnimation();
  }, []);

  return (
    <Animated.View style={{ opacity: opacity }}>
      <Animated.View style={{ height: height }}></Animated.View>
      <Flex
        bgColor="white"
        alignSelf="center"
        mb="-7px"
        p="-5px"
        zIndex={1}
        rounded="full"
      >
        <Icon
          name="shopping-sale"
          as={Fontisto}
          color="blue.500"
          size="24px"
          m="-5px"
        />
      </Flex>
      <Divider bgColor="blue.500" />

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
    </Animated.View>
  );
};

export default DiscountCarousel;
