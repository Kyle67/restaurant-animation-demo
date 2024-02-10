import { Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Flex, HStack, Icon, Image, Text, VStack } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { NavigationProps } from "../../AppNavigator";
import { DishInfo } from "../../pages/Home";
import RatingTag from "../common/RatingTag";

type DishCardProps = {
  dish: DishInfo;
};

const DishCard = ({ dish }: DishCardProps) => {
  const {
    category,
    price,
    name,
    image,
    rating,
    cuisines,
    expectedWait,
    distance,
    discount,
    discountUpTo,
  } = dish;

  const { width: WINDOW_WIDTH } = Dimensions.get("window");

  const navigation = useNavigation<NavigationProps>();

  // TODO: Pure veg tag

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", { restaurantId: dish.restaurantId })
      }
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        overflow: "hidden",
        borderRadius: 16,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        alt={name}
        h="150px"
        w={WINDOW_WIDTH}
      />

      <Flex
        bgColor="#585a5eCC"
        position="absolute"
        m="10px"
        px="4px"
        py="2px"
        rounded="lg"
      >
        <Text color="white">
          {category} • ${price / 100}
        </Text>
      </Flex>
      <HStack position="absolute" right={0} m="10px">
        <Icon
          name={true ? "heart-o" : "heart"}
          as={FontAwesome}
          size="24px"
          color="white"
        />
        <Icon
          name="dots-three-vertical"
          as={Entypo}
          size="24px"
          color="white"
        />
      </HStack>
      <VStack bgColor="white" px="16px" py="8px">
        <HStack justifyContent="space-between">
          <VStack>
            <Text fontSize="20px" fontWeight="semibold">
              {name}
            </Text>
            <HStack>
              {cuisines.map((cuisine, index, arr) => (
                <Text key={cuisine} color="gray.400">
                  {cuisine}
                  {index !== arr.length - 1 ? " • " : ""}
                </Text>
              ))}
            </HStack>
            <Text color="gray.400">
              ⏱️ {expectedWait[0]}-{expectedWait[1]} min • {distance / 1000} km
            </Text>
          </VStack>

          <Flex mb="auto">
            <RatingTag rating={rating} />
          </Flex>
        </HStack>
        <Flex
          my="8px"
          borderStyle="dashed"
          borderRadius={1}
          borderWidth={0.3}
        />
        <HStack space="4px" alignItems="center">
          <Icon name="shopping-sale" as={Fontisto} color="blue.500" />
          <Text color="blue.500" fontWeight="medium">
            {discount}% OFF up to ${discountUpTo / 100}
          </Text>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
};

export default DishCard;
