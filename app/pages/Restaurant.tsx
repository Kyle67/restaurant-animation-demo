import { AntDesign } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Flex, Icon, Text } from "native-base";
import { Pressable } from "react-native";
import { StackScreens } from "../AppNavigator";

type DishData = {
  dishId: string;
  name: string;
  rating: number;
  noOfRatings: number;
  image: string;
  price: number;
  description: string;
  isBestSeller: boolean;
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
        rating: 4.2,
        image:
          "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
        noOfRatings: 206,
        description:
          "A South Indian breakfast dish made with rice and lentils cooked with spices",
        isBestSeller: true,
      },
      {
        dishId: "2",
        name: "Ghee Pongal",
        price: 9000,
        rating: 4.2,
        image:
          "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
        noOfRatings: 206,
        description:
          "A South Indian breakfast dish made with rice and lentils cooked with spices",
        isBestSeller: true,
      },
    ],
    isPureVeg: true,
    cuisines: ["South Indian", "Chinese"],
    expectedWait: [35, 40],
    distance: 9000,
    discount: 40,
    discountUpTo: 8000,
  },
];

type RestaurantProps = {
  route: RouteProp<StackScreens, "Restaurant">;
};

const Restaurant = ({ route }: RestaurantProps) => {
  const navigation = useNavigation();
  const { restaurantId } = route.params;

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
  } = restaurant || {};

  return (
    <Flex>
      <Pressable
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
        style={{
          backgroundColor: "#585a5e30",
          alignSelf: "center",
          marginRight: "auto",
          padding: 8,
          borderRadius: 9999,
          margin: 4,
        }}
      >
        <Icon name="back" as={AntDesign} />
      </Pressable>
      <Text>Restaurant</Text>
    </Flex>
  );
};

export default Restaurant;
