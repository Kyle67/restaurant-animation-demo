import { Flex, Text } from "native-base";
import { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
};

const Chip = ({ children }: ChipProps) => {
  return (
    <Flex borderWidth={1} borderColor="gray.300" p="5px" rounded="lg">
      <Text fontWeight="medium" mt="auto">
        {children}
      </Text>
    </Flex>
  );
};

export default Chip;
