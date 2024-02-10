import { AntDesign } from "@expo/vector-icons";
import { HStack, Icon, Text } from "native-base";

type RatingTagProps = {
  rating: number;
};

const RatingTag = ({ rating }: RatingTagProps) => {
  return (
    <HStack
      bgColor="green.500"
      alignItems="center"
      space="2px"
      rounded="md"
      px="4px"
      py="2px"
      alignSelf="center"
    >
      <Text color="white">{rating}</Text>
      <Icon name="star" as={AntDesign} color="white" size="10px" />
    </HStack>
  );
};

export default RatingTag;
