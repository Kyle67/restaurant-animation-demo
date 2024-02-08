import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Flex, HStack, Icon, ScrollView, Text } from "native-base";
import Chip from "../components/home/Chip";
import Searchbar from "../components/home/Searchbar";

const Home = () => {
  return (
    <Flex>
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
  );
};

export default Home;
