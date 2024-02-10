import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HStack, Icon } from "native-base";
import { useState } from "react";
import { Pressable } from "react-native";
import AnimatedFavourite from "../common/AnimatedFavourite";

const Header = () => {
  const [isFavourite, setIsFavourite] = useState(false);

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
          marginRight: "auto",
          padding: 8,
          borderRadius: 9999,
        }}
      >
        <Icon name="arrowleft" as={AntDesign} size="lg" />
      </Pressable>

      <HStack space="6px">
        <Icon name="search" as={Feather} size="lg" />
        <AnimatedFavourite
          isFavourite={isFavourite}
          setIsFavourite={setIsFavourite}
        />
        <Icon name="share" as={Feather} size="lg" />
        <Icon name="dots-three-vertical" as={Entypo} size="lg" />
      </HStack>
    </HStack>
  );
};

export default Header;
