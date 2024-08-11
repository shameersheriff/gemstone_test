import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

interface StoneCardProps {
  id: number;
  name: string;
  weight: string;
  size: string;
  location: string;
  available: boolean;
  selected: boolean;
  imageSrc?: string;
  onToggleSelect: () => void;
}

const StoneCard: React.FC<StoneCardProps> = ({
  id,
  name,
  weight,
  size,
  location,
  available,
  selected,
  imageSrc,
  onToggleSelect,
}) => {
  return (
    <Box border="1px" borderRadius="md" p={4}>
      <Image src={imageSrc} alt={name} mb={2} />
      <Text fontSize="sm">{id}</Text>
      <Text fontWeight="bold" fontSize="lg">
        {name}
      </Text>
      <Text fontSize="sm">Weight: {weight} ct</Text>
      <Text fontSize="sm">Size: {size} mm</Text>
      <Text fontSize="sm">Location: {location}</Text>
      <Text fontSize="sm" color={available ? "green.500" : "red.500"}>
        {available ? "Available" : "Unavailable"}
      </Text>
      <Button
        colorScheme={selected ? "red" : "green"}
        onClick={onToggleSelect}
        mt={2}
      >
        {selected ? "Remove From Selected List" : "Add to Selected List"}
      </Button>
    </Box>
  );
};

export default StoneCard;
