import { Box, Flex, Input, Button, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      borderBottom="1px"
      borderColor="gray.200"
      borderWidth={4}
      borderLeftStyle={"none"}
      borderRightStyle={"none"}
      py={10}
      px={4}
    >
      <Flex align="center" justify="space-between">
        {/* Logo and Title */}
        <Flex align="center" flexDirection={"column"} alignItems={'flex-start'}>
          <Box>
            <Text fontSize="1rem" fontWeight="bold" color="teal.600">
              myGemStock.com/
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="teal.600">
              SapphireSource
            </Text>
          </Box>
        </Flex>

        {/* Search and Lookup */}
        <Flex align="center">
          <Input placeholder="Search" size="sm" mr={2} />
          <Button
            size="sm"
            paddingRight={"5"}
            paddingLeft={"5"}
            width={"fit-content"}
          >
            Search
          </Button>
        </Flex>

        <Flex align="center">
          <Input placeholder="Enter Stone ID" size="sm" mr={2} />
          <Button
            size="sm"
            paddingRight={"5"}
            paddingLeft={"5"}
            width={"fit-content"}
          >
            Lookup Stone
          </Button>
        </Flex>

        {/* Selected Stones Link */}
        <Link href="#" color="teal.600" fontWeight={700}>
          Selected Stones(5)
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
