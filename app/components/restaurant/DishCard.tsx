import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  Flex,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import {} from "react-native";
import { DishData } from "../../pages/Restaurant";

type DishCardProps = {
  dish: DishData;
};

const DishCard = ({ dish }: DishCardProps) => {
  const {
    dishId,
    name,
    rating,
    noOfRatings,
    image,
    price,
    description,
    isBestSeller,
    isAvailable,
  } = dish;

  return (
    <HStack my="16px" space="4px">
      <VStack flexGrow={1} flexShrink={1}>
        <HStack space="4px">
          <Icon
            name="dot-circle-o"
            as={FontAwesome}
            color={isAvailable ? "green.500" : "red.500"}
            alignSelf="center"
          />
          {isBestSeller && (
            <Flex bgColor="yellow.600" rounded="md" px="4px" py="2px">
              <Text color="white" fontSize="12px" fontWeight="semibold">
                Bestseller
              </Text>
            </Flex>
          )}
        </HStack>
        <Text fontSize="16px" fontWeight="semibold">
          {name}
        </Text>
        <HStack space="4px">
          <HStack
            bgColor="yellow.50"
            alignItems="center"
            px="4px"
            py="2px"
            rounded="md"
            borderWidth={1}
            borderColor="yellow.500"
          >
            {Array(Math.floor(rating))
              .fill({})
              .map(() => (
                <Icon name="star" as={AntDesign} color="yellow.500" />
              ))}
            {Array(5 - Math.floor(rating))
              .fill({})
              .map(() => (
                <Icon name="staro" as={AntDesign} />
              ))}
          </HStack>
          <Text>{noOfRatings} ratings</Text>
        </HStack>
        <Text fontWeight="semibold">${price / 100}</Text>
        <Text color="gray.500">{description}</Text>
      </VStack>
      <VStack alignItems="center">
        <Image
          source={{ uri: image }}
          alt={name}
          h="150px"
          w="150px"
          rounded="xl"
        />
        <Pressable
          bgColor="red.50"
          alignSelf="center"
          w="70%"
          py="2px"
          borderColor="red.600"
          borderWidth={1}
          rounded="lg"
          mt={-5}
        >
          <Text
            color="red.600"
            textAlign="center"
            fontSize="20px"
            fontWeight="semibold"
          >
            ADD
          </Text>
          <Icon
            name="plus"
            as={AntDesign}
            size="12px"
            color="red.600"
            position="absolute"
            right="4px"
            top="4px"
          />
        </Pressable>
        <Text color="gray.400" fontSize="12px">
          customisable
        </Text>
      </VStack>
    </HStack>
  );
};

export default DishCard;
