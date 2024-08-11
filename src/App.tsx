import React, { useState } from "react";
import {
  Box,
  Grid,
  Input,
  Button,
  Text,
  Stack,
  Select,
  Heading,
  HStack,
} from "@chakra-ui/react";
import StoneCard from "./components/StoneCard";
import Header from "./components/shared/header/Header";

const StonePage = () => {
  const [selectedStones, setSelectedStones] = useState<number[]>([]);

  const handleToggleSelect = (id: number) => {
    if (selectedStones.includes(id)) {
      setSelectedStones(selectedStones.filter((stoneId) => stoneId !== id));
    } else {
      setSelectedStones([...selectedStones, id]);
    }
  };

  const stones = [
    {
      id: 101102,
      name: "Natural Corundum Sapphire Princess",
      weight: "0.229",
      size: "3.39x3.35x2.13",
      location: "Colombo",
      available: true,
    },
    {
      id: 101101,
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101103,
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101104,
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101105,
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101106,
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
  ];

  return (
    <Box p={4}>
      <Box as="header" color="white"></Box>
      <Header />
      <Box mt={4} mb={4}>
        <Text fontSize="lg">Number of Available Stones: {stones.length}</Text>
      </Box>

      <Stack direction="row" spacing={4} align="center">
        <HStack>
          <Select placeholder="Sort By">
            <option value="length">Length</option>
          </Select>
          <Select placeholder="Sort Order">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </HStack>
        <Select placeholder="Results Per Page">
          <option value="25">25</option>
          <option value="50">50</option>
        </Select>
        <Button colorScheme="teal">Grid View</Button>
        <Button colorScheme="teal">List View</Button>
        <Button colorScheme="teal">Submit</Button>
      </Stack>

      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
        {stones.map((stone) => (
          <StoneCard
            key={stone.id}
            id={stone.id}
            name={stone.name}
            weight={stone.weight}
            size={stone.size}
            location={stone.location}
            available={stone.available}
            selected={selectedStones.includes(stone.id)}
            onToggleSelect={() => handleToggleSelect(stone.id)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default StonePage;
