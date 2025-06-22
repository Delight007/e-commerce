"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "915 Generation",
    "Ace Elec",
    "AKAI",
    "Ambiano",
    "Andrew James",
    "Aucma",
    "Avinas",
    "Binatone",
    "Bm Satellite",
    "Bosch",
    "Braun",
    "Breveille",
    "Breville",
    "Century",
    "Cookworks",
    "EAGEAT",
    "Eurosonic",
    "Eurotek",
    "Fashion",
    "Generic",
    "Gsr",
    "Haeger",
    "Haus Strom",
    "Hoffmans",
    "Ingco",
    "Kinelco",
    "Kitchen Genie",
    "Lexical",
    "Linsan",
    "Master Chef",
    "Maxi",
    "Mixer",
    "Moulinex",
    "Netmego",
    "Nulek",
    "Panasonic",
    "Polystar",
    "Prestige",
    "Progress",
    "Rite Tek",
    "Rohnson",
    "Royal Swiss",
    "Russell Hobbs",
    "Salter",
    "Scarlet",
    "Scarlett",
    "Scarlette",
    "SILVER CREST",
    "Sokany",
    "Sonifer",
    "Sonik",
    "Syinix",
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
