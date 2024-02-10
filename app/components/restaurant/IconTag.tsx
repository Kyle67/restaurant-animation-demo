import { HStack, IIconProps, Icon, Text } from "native-base";

type IconTagProps = IIconProps & {
  text: string;
};

const IconTag = ({ text, ...props }: IconTagProps) => {
  return (
    <HStack
      space="2px"
      py="2px"
      px="6px"
      borderWidth={1}
      rounded="md"
      alignItems="center"
    >
      <Icon {...props} />
      <Text>{text}</Text>
    </HStack>
  );
};

export default IconTag;
