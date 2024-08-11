import { Flex, Button, Text } from "@chakra-ui/react";

const FilterButton = () => {
  return (
    <Flex width={"100%"}>
      <Button width={"100%"} colorScheme="teal" padding={10}>
        <Text fontSize={"1.5rem"}>Filter Stones</Text>{" "}
      </Button>
    </Flex>
  );
};

export default FilterButton;
