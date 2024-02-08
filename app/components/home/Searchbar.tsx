import { Feather } from "@expo/vector-icons";
import { Divider, HStack, Icon, Input } from "native-base";

const Searchbar = () => (
  <HStack
    alignItems="center"
    m="16px"
    borderWidth={1}
    borderColor="gray.300"
    rounded="lg"
    p="8px"
  >
    <Icon name="search" as={Feather} color="red.600" />
    <Input
      variant="unstyled"
      placeholder="Restaurant name or a dish..."
      flexGrow={1}
      flexShrink={1}
      fontSize="15px"
    />
    <Divider orientation="vertical" />
    <Icon name="mic" as={Feather} color="red.600" ml="16px" mr="8px" />
  </HStack>
);

export default Searchbar;
