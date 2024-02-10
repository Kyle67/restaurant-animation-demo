import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HStack, Icon } from "native-base";
import { Pressable } from "react-native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <HStack m="5px" alignItems="center">
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
        }}
      >
        <Icon name="back" as={AntDesign} />
      </Pressable>

      <HStack space="6px">
        <Icon name="search" as={Feather} size="lg" />
        <Icon name="heart-o" as={FontAwesome} size="lg" />
        <Icon name="share" as={Feather} size="lg" />
        <Icon name="dots-three-vertical" as={Entypo} size="lg" />
      </HStack>
    </HStack>
  );
};

export default Header;
