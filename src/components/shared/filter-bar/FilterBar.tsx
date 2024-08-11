import { Flex, Select, Button, Text } from "@chakra-ui/react";

const FilterBar = () => {
  return (
    <Flex
      align="center"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
      bg="white"
      justifyContent={'center'}
    >
      {/* Sort By */}
      <Text fontWeight="bold" mr={2}>
        Sort By
      </Text>
      <Select placeholder="Length" size="sm" width="auto" mr={4}>
        {/* Add more options as needed */}
      </Select>

      {/* Sort Order */}
      <Text fontWeight="bold" mr={2}>
        Sort Order
      </Text>
      <Select placeholder="Ascending" size="sm" width="auto" mr={4}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>

      {/* Results Per Page */}
      <Text fontWeight="bold" mr={2}>
        Results Per Page:
      </Text>
      <Select placeholder="25" size="sm" width="auto" mr={4}>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Select>

      {/* Grid/List View */}
      <Text fontWeight="bold" mr={2}>
        Grid View/List View
      </Text>
      <Select placeholder="Grid" size="sm" width="auto" mr={4}>
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </Select>

      {/* Submit Button */}
      <Button size="sm" colorScheme="teal">
        Submit
      </Button>
    </Flex>
  );
};

export default FilterBar;
