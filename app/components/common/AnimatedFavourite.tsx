import { FontAwesome } from "@expo/vector-icons";
import { Flex, Icon } from "native-base";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";

type AnimatedFavouriteProps = {
  isFavourite: boolean;
  setIsFavourite: Dispatch<SetStateAction<boolean>>;
};

const AnimatedFavourite = ({
  isFavourite,
  setIsFavourite,
}: AnimatedFavouriteProps) => {
  const favouriteScale = useSharedValue<number>(0);

  const onFavourite = () => {
    favouriteScale.value = withSequence(
      withSpring(favouriteScale.value ? 0 : 1)
    );
    setIsFavourite(!isFavourite);
  };

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            favouriteScale.value,
            [0, 1],
            [1, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: favouriteScale.value,
        },
      ],
      opacity: favouriteScale.value,
    };
  });

  return (
    <Flex>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <Icon
          name={isFavourite ? "heart" : "heart-o"}
          as={FontAwesome}
          size="lg"
          color={isFavourite ? "red.600" : undefined}
          onPress={onFavourite}
        />
      </Animated.View>
      <Animated.View style={fillStyle}>
        <Icon
          name="heart"
          as={FontAwesome}
          size="lg"
          color="red.600"
          onPress={onFavourite}
        />
      </Animated.View>
    </Flex>
  );
};

export default AnimatedFavourite;
