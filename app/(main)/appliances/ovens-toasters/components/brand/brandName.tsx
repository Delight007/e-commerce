"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "915 Generation",
    "AKAI",
    "Ambiano",
    "Andrew James",
    "Binatone",
    "Boscon",
    "Breville",
    "Century",
    "Cookworks",
    "Crown Star",
    "Daewoo",
    "Dessini",
    "Eurosonic",
    "Flavorwave",
    "Generic",
    "Genetic",
    "Gold Crownic",
    "Havells",
    "JD SMP",
    "Kinelco",
    "Large",
    "Lexical",
    "Linsan",
    "Master Chef",
    "Maxi",
    "Morphy Richards",
    "Moulinex",
    "Oraimo",
    "Polystar",
    "Progress",
    "Pyramid",
    "Qasa",
    "RAF",
    "Rashnik",
    "Rite Tek",
    "Russell Hobbs",
    "Saisho",
    "Salter",
    "Scanfrost",
    "Sensiohome",
    "SILVER CREST",
    "Smart Home",
    "SMP",
    "Sokany",
    "Sonifer",
    "Sonik",
    "Tesco",
    "Tower",
    "TRIFONE",
    "Winningstar",
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
