"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function FoodProcessorBrandName() {
  const brands = [
    " 915 Generation",
    "AKAI",
    "Ambiano",
    "Avinash",
    "Bajaj",
    "BARDEFU",
    "Binatone",
    "Black & Decker",
    "Buchymix",
    "Century",
    "Citronella Candle",
    "Cookworks",
    "Crown Star",
    "Daewoo",
    "Decen",
    "Dsp",
    "Eurosonic",
    "Farmhouse",
    "Febreze",
    "Gener`Ink",
    "Generic",
    "Gift Master",
    "Gourmet",
    "Havells",
    "Hoffmans",
    "JD SMP",
    "King Style",
    "Kitchen Expert",
    "Kitchen Genie",
    "Legacy",
    "Lexical",
    "Linsan",
    "Logik",
    "Master Chef",
    "Mateamoda",
    "Maxi",
    "Maximus",
    "Moulinex",
    "MR. STEEL",
    "National",
    "New Image",
    "Nicer Dicer Plus",
    "Ninja",
    "Nutribullet",
    "Orange",
    "Paloma",
    "Paloma White",
    "Panasonic",
    "Pinnacle",
    "Polystar",
    "Prestige",
    "Progress",
    "Pyramid",
    "Qasa",
    "RAF",
    "RAYLUX",
    "Rico",
    "Rite Tek",
    "Russell Hobbs",
    "Salter",
    "Savanna",
    "Scanfrost",
    "Silver Crest",
    "Sinbo",
    "Sokany",
    "Sonic",
    "Sonifer",
    "Sonik",
    "Steel",
    "Stirling",
    "Swiss",
    "Syinix",
    "Synix",
    "Tesco",
    "Tower",
    "Trim",
    "Usha",
    "VTCL",
    "YELLOW OCTOPUS",
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
