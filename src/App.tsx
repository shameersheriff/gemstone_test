import { useState } from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import StoneCard from "./components/StoneCard";
import Header from "./components/shared/header/Header";
import FilterBar from "./components/shared/filter-bar/FilterBar";
import FilterButton from "./components/shared/filter-button/FilterButton";

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
      imageSrc: "assets/images/gems/blue.png",
      name: "Natural Corundum Sapphire Princess",
      weight: "0.229",
      size: "3.39x3.35x2.13",
      location: "Colombo",
      available: true,
    },
    {
      id: 101101,
      imageSrc: "assets/images/gems/green.jpg",
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101103,
      imageSrc: "assets/images/gems/blue.png",
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101104,
      imageSrc: "assets/images/gems/green.jpg",
      name: "Natural Corundum Sapphire Princess",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101105,
      name: "Natural Corundum Sapphire Princess",
      imageSrc: "assets/images/gems/blue.png",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
    {
      id: 101106,
      name: "Natural Corundum Sapphire Princess",
      imageSrc: "assets/images/gems/green.jpg",
      weight: "0.275",
      size: "3.41x3.39x2.65",
      location: "Colombo",
      available: true,
    },
  ];

  return (
    <Box p={{ base: 2, md: 4 }}>
      <Header />
      <Box mt={{ base: 2, md: 4 }} mb={{ base: 2, md: 4 }}>
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={700}>
          Number of Available Stones: {stones.length}
        </Text>
      </Box>
      <FilterButton />
      <FilterBar />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        mt={4}
      >
        {stones.map((stone) => (
          <StoneCard
            key={stone.id}
            id={stone.id}
            name={stone.name}
            weight={stone.weight}
            size={stone.size}
            location={stone.location}
            available={stone.available}
            imageSrc={stone.imageSrc}
            selected={selectedStones.includes(stone.id)}
            onToggleSelect={() => handleToggleSelect(stone.id)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default StonePage;
