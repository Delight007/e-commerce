"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "915 Generation",
    "AfriOne",
    "AKAI",
    "Amazing Gadgets",
    "Ambiano",
    "Andrew James",
    "Avinas",
    "Bajaj",
    "BARDEFU",
    "Binatone",
    "Blaupunkt",
    "Braun",
    "Breville",
    "Buchymix",
    "Century",
    "Cookworks",
    "Corona",
    "Crown Star",
    "Daewoo",
    "Euro",
    "Eurosonic",
    "Flourish",
    "Gasa",
    "Geepas",
    "Gemat",
    "Generic",
    "George Foreman",
    "German Home",
    "Gourmet",
    "Gsr",
    "Haier Thermocool",
    "Hamilton Beach",
    "Havells",
    "Heavy Duty",
    "Hisense",
    "Hoffmans",
    "itel",
    "James Martin",
    "Jata",
    "Jumia Bundles",
    "Kenturkey",
    "Kinelco",
    "King Style",
    "Kitchen Genie",
    "Kuchef",
    "Legend",
    "Lexical",
    "Linsan",
    "Lontor",
    "Magic",
    "Master Chef",
    "Maxi",
    "Maximus",
    "MeWe",
    "Morphy Richards",
    "Moulinex",
    "Nikai",
    "Nima",
    "Nine",
    "Ninja",
    "Ninja Black",
    "Nulek",
    "Nutribullet",
    "Oraimo",
    "Orange",
    "Oster",
    "Paloma White",
    "Panasonic",
    "Philips",
    "Pinnacle",
    "Polystar",
    "Porodo",
    "Power Deluxe",
    "Pyramid",
    "Qasa",
    "Queen",
    "Queens",
    "Quinix",
    "RAF",
    "Rashnik",
    "RAYLUX",
    "Rico",
    "Rite Tek",
    "Russell Hobbs",
    "Saisho",
    "Salter",
    "Scanfrost",
    "Sensiohome",
    "Shake N Take",
    "Sharp",
    "Silver",
    "SILVER CREST",
    "Smart Home",
    "Sokany",
    "Sonik",
    "Stirling",
    "Syinix",
    "Unold",
    "VTCL",
    "Zyre",
  ];

  return (
    <FormGroup>
      {brands.map((brand, index) => (
        <Box
          key={brand}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "2px",
            "&:hover .custom-checkbox": {
              backgroundColor: "lightgreen", // Change checkbox background on hover
            },
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                className="custom-checkbox"
                sx={{
                  transform: "scale(1.0)", // Reduce checkbox size
                  borderRadius: "50%",
                  transition: "background-color 0.3s ease-in-out", // Smooth effect
                  "&.Mui-checked": { color: "red" }, // Checked color
                  padding: "8px", // Ensure padding so background is visible
                  marginLeft: "10px",
                }}
              />
            }
            label={<span className="text-sm ml-1">{brand}</span>}
          />
        </Box>
      ))}
    </FormGroup>
  );
}
