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
    "Avinas",
    "Binatone",
    "Black & Decker",
    "BLACK+DECKER",
    "BLACK AND DECKER",
    "Blaupunkt",
    "Breville",
    "Buchymix",
    "Camel",
    "Century",
    "Daewoo",
    "Dominion",
    "Dsp",
    "Dunelm",
    "Egl",
    "Electric",
    "Eurosonic",
    "Faster",
    "Genera",
    "Generic",
    "George Foreman",
    "Gourmet",
    "Hisense",
    "Instant",
    "Instant Pot",
    "itel",
    "JD SMP",
    "K3",
    "KALITE",
    "Kitchen Genie",
    "Lontor",
    "Maxi",
    "Maximus",
    "Maximus Delux",
    "Mistral",
    "Morphy Richards",
    "Nine",
    "Ninja",
    "Oraimo",
    "Oster",
    "Panasonic",
    "Picasso",
    "Pinacle",
    "Pinnacle",
    "Pyramid",
    "Qasa",
    "RAF",
    "RAYLUX",
    "Rite Tek",
    "Salter",
    "Scanfrost",
    "ShopEX",
    "Silver",
    "SILVER CREST",
    "SLIVER STAR",
    "Smith & Nobel",
    "Sokany",
    "Sonifer",
    "Sonik",
    "Stirling",
    "Sur La Table",
    "Syinix",
    "Synix",
    "TINMO",
    "Tower",
    "TRIFONE",
    "Visicook",
    "Wonderful",
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
