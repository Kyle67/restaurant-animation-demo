import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import {
  Divider,
  Flex,
  HStack,
  Icon,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { StackScreens } from "../AppNavigator";
import RatingTag from "../components/common/RatingTag";
import DiscountCarousel from "../components/restaurant/DiscountCarousel";
import DishCard from "../components/restaurant/DishCard";
import Header from "../components/restaurant/Header";
import IconTag from "../components/restaurant/IconTag";

export type DishData = {
  dishId: string;
  name: string;
  rating: number;
  noOfRatings: number;
  image: string;
  price: number;
  description: string;
  isBestSeller: boolean;
  isAvailable: boolean;
};

type DemoData = {
  restaurantId: string;
  name: string;
  dishes: DishData[];
  cuisines: string[];
  isPureVeg: boolean;
  expectedWait: [number, number];
  distance: number;
  discount: number;
  discountUpTo: number;
  noOfRatings: number;
  locations: string[];
  rating: number;
};

const DEMO_DATA: DemoData[] = [
  {
    restaurantId: "1",
    name: "Tirupur Sree Annapoorna",
    dishes: [
      {
        dishId: "1",
        name: "Ghee Pongal",
        price: 9000,
        rating: 4,
        image:
          "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
        noOfRatings: 206,
        description:
          "A South Indian breakfast dish made with rice and lentils cooked with spices",
        isBestSeller: true,
        isAvailable: true,
      },
      {
        dishId: "2",
        name: "Ghee Pongal",
        price: 9000,
        rating: 4,
        image:
          "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
        noOfRatings: 206,
        description:
          "A South Indian breakfast dish made with rice and lentils cooked with spices",
        isBestSeller: true,
        isAvailable: true,
      },
    ],
    isPureVeg: true,
    cuisines: ["South Indian", "Cafe"],
    expectedWait: [35, 40],
    distance: 9000,
    discount: 40,
    discountUpTo: 8000,
    noOfRatings: 7432,
    locations: ["Rayapuram", "Location 2", "Location 3"],
    rating: 4.2,
  },
];

type RestaurantProps = {
  route: RouteProp<StackScreens, "Restaurant">;
};

const Restaurant = ({ route }: RestaurantProps) => {
  const { restaurantId } = route.params;

  const ratingFormatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "INR",
  });

  const restaurant = DEMO_DATA.find(
    (restaurant) => restaurant.restaurantId === "1"
  );

  const {
    name,
    dishes,
    cuisines,
    isPureVeg,
    expectedWait,
    distance,
    discount,
    discountUpTo,
    rating,
    noOfRatings,
    locations,
  } = restaurant || {};

  const height = useSharedValue<number | string>(100);
  const opacity = useSharedValue<number | string>(0);
  const tagsOpacity = useSharedValue<number | string>(0);

  const onLoadAnimation = () => {
    height.value = withDelay(500, withSpring(0, { duration: 3000 }));
    opacity.value = withDelay(500, withSpring(1, { duration: 3000 }));
    tagsOpacity.value = withSpring(1, { duration: 3000 });
  };

  useEffect(() => {
    onLoadAnimation();
  }, []);

  if (!rating || !expectedWait || !distance || !locations || !noOfRatings)
    return <Spinner />;

  return (
    <Flex>
      <Header />
      <ScrollView>
        <VStack m="16px" space="8px" safeAreaBottom>
          <VStack alignItems="center" space="6px">
            <Text
              fontSize="32px"
              lineHeight="xs"
              fontWeight="semibold"
              textAlign="center"
            >
              {name}
            </Text>
            <HStack>
              {isPureVeg && (
                <Text alignSelf="center">
                  <Icon name="leaf" as={Entypo} color="green.500" />
                  Pure Veg {"• "}
                </Text>
              )}
              {cuisines?.map((cuisine, index, arr) => (
                <Text>
                  {cuisine}
                  {index !== arr.length - 1 ? " • " : ""}
                </Text>
              ))}
            </HStack>
            <HStack space="8px" alignItems="center">
              <RatingTag rating={rating} />
              <Text // TODO: Add webview here
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "dotted",
                }}
                onPress={() => Alert.alert("Navigate to ratings")}
              >
                {(noOfRatings / 1000).toFixed(1)}K ratings
              </Text>
            </HStack>
            <HStack bgColor="gray.200" p="4px" rounded="lg">
              <Text>
                ⏱️ {expectedWait[0]}-{expectedWait[1]} min • {distance / 1000}{" "}
                km
              </Text>
              <Divider orientation="vertical" mx="6px" />
              <Text onPress={() => Alert.alert("Select location")}>
                {locations[0]} <Icon name="chevron-down" as={Entypo} />
              </Text>
            </HStack>
          </VStack>
          <DiscountCarousel />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ overflow: "visible" }}
          >
            <Animated.View
              style={{
                opacity: tagsOpacity,
                columnGap: 6,
                flexDirection: "row",
              }}
            >
              <IconTag name="sliders" as={FontAwesome} text="Filters" />
              <IconTag name="medal" as={FontAwesome5} text="Bestseller" />
              <IconTag name="star" as={AntDesign} text="Top rated" />
              <IconTag name="pepper-hot" as={FontAwesome5} text="Spicy" />
              <IconTag
                name="miscellaneous-services"
                as={MaterialIcons}
                text="Other"
              />
            </Animated.View>
          </ScrollView>
          <Animated.View style={{ opacity: opacity, marginTop: 12, flex: 1 }}>
            <Animated.View style={{ height: height }}></Animated.View>

            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="18px">
                Recommended
              </Text>
              <Icon name="caretup" as={AntDesign} />
            </HStack>
            <VStack space="16px">
              {dishes?.map((dish, index, arr) => (
                <Flex key={dish.dishId}>
                  <DishCard dish={dish} />
                  {index !== arr.length - 1 && (
                    <Flex
                      borderStyle="dashed"
                      borderRadius={1}
                      borderWidth={0.3}
                    />
                  )}
                </Flex>
              ))}
            </VStack>
          </Animated.View>
        </VStack>
      </ScrollView>
    </Flex>
  );
};

export default Restaurant;
