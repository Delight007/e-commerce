"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "915 Generation",
    "Aicok",
    "AICOOK",
    "Amzchef",
    "Andrew James",
    "Ariston",
    "AUGZIN",
    "Aux",
    "Avinas",
    "Bajaj",
    "Binatone",
    "Black & Decker",
    "Braun",
    "Buchymix",
    "Buerka",
    "Century",
    "Crown Star",
    "Daewoo",
    "Disine Regina",
    "Dsp",
    "EmEst",
    "Eurosonic",
    "Fashion",
    "Gastroback",
    "Generic",
    "GoldCrest",
    "Happy Home",
    "Hoffner",
    "Hotpoint Ariston",
    "Household Essentials",
    "Jata",
    "Juicerclub",
    "KitchenAid",
    "Lexical",
    "Linsan",
    "Macom",
    "Mason",
    "Master Chef",
    "Maxi",
    "Maximus Delux",
    "Mega",
    "Mirta",
    "Moulinex",
    "Nine",
    "Nutribullet",
    "Palson",
    "Petra",
    "Pinacle",
    "Pinnacle",
    "Polystar",
    "Prestige",
    "Progress",
    "Pyramid",
    "Quinix",
    "RAF",
    "RAYLUX",
    "Rite Tek",
    "Salter",
    "Sanford",
    "Savanna",
    "Savannah",
    "SILVER CREST",
    "Sokany",
    "Sonifer",
    "SQ Professional",
    "Sunex",
    "TIMBUTUS",
    "Yiliker",
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
