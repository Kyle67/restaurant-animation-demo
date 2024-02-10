import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Flex, HStack, Icon, ScrollView, Text, VStack } from "native-base";
import Chip from "../components/home/Chip";
import DishCard from "../components/home/DishCard";
import Searchbar from "../components/home/Searchbar";

export type DishInfo = {
  // TODO: Move to types folder
  category: string;
  price: number;
  isPureVeg: boolean;
  name: string;
  rating: number;
  cuisines: string[];
  expectedWait: [number, number];
  distance: number;
  discount: number;
  discountUpTo: number;
  image: string;
  restaurantId: string;
};

const DEMO_DATA: DishInfo[] = [
  {
    category: "Ghee Pongal",
    price: 9000,
    isPureVeg: true,
    name: "Tirupur Sree Annapoorna",
    rating: 4.2,
    cuisines: ["South Indian", "Chinese", "$150 for one"],
    expectedWait: [35, 40],
    distance: 9000,
    discount: 40,
    discountUpTo: 8000,
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
    restaurantId: "1",
  },
  {
    category: "Ghee Pongal",
    price: 9000,
    isPureVeg: true,
    name: "Tirupur Sree Annapoorna",
    rating: 4.2,
    cuisines: ["South Indian", "Chinese", "$150 for one"],
    expectedWait: [35, 40],
    distance: 9000,
    discount: 40,
    discountUpTo: 8000,
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
    restaurantId: "1",
  },
];

const Home = () => {
  return (
    <Flex>
      <Flex
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
        backgroundColor="white"
        pb="16px"
      >
        <Searchbar />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          mx="16px"
          overflow="visible"
        >
          <HStack space="10px">
            <Chip>
              <HStack
                space="3px" // TODO: Not centered correctly
              >
                <Icon name="sliders" as={FontAwesome} />
                <Text fontWeight="medium">Sort</Text>
                <Icon name="caret-down" as={Ionicons} />
              </HStack>
            </Chip>
            <Chip>Nearest</Chip>
            <Chip>Great Offers</Chip>
            <Chip>Rating 4.0+</Chip>
            <Chip>Other</Chip>
          </HStack>
        </ScrollView>
      </Flex>
      <ScrollView>
        <Flex m="16px" alignItems="center">
          <Text fontSize="11px" color="gray.400" pb="16px">
            FEATURED
          </Text>
          <VStack space="32spx">
            {DEMO_DATA.map((dish) => (
              <DishCard key={dish.name} dish={dish} />
            ))}
          </VStack>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Home;
