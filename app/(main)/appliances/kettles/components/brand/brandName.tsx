"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "915 Generation",
    "Ambiano",
    "Andrew James",
    "Aris",
    "Avinas",
    "Bellin",
    "Binatone",
    "Black & Decker",
    "Boscon",
    "Breveille",
    "Breville",
    "Buyor",
    "Century",
    "Cookworks",
    "Corona",
    "Crown Star",
    "Daewoo",
    "Desini",
    "Dessini",
    "Dessini Regina",
    "Disine Regina",
    "Electric",
    "Eurosonic",
    "Fashion",
    "Five Stars",
    "Generic",
    "German",
    "Gift Master",
    "Glamstar",
    "Green World",
    "Household Essentials",
    "itel",
    "iYOWEI",
    "JD SMP",
    "Jumia",
    "Jumia Bundles",
    "Kettle",
    "Kinelco",
    "Linsan",
    "Lixada",
    "Lontor",
    "Marado",
    "Master Chef",
    "Maxi",
    "Maximus",
    "MeWe",
    "Morphy Richards",
    "Mr Chef",
    "National",
    "National Star",
    "Nikai",
    "Nima",
    "Nine",
    "Oraimo",
    "Panasonic",
    "Polystar",
    "Prima",
    "Purch",
    "PURE ADVANTAGE",
    "Pyramid",
    "Qasa",
    "RAF",
    "Rashnik",
    "Ritek",
    "Russell Hobbs",
    "Sabichi",
    "Sainsbury'S",
    "Sainsbury'S Home Collection",
    "Saisho",
    "Salter",
    "Sbk",
    "Scanfrost",
    "Scarlet",
    "Scarlett",
    "Scarlette",
    "Shield 101",
    "SILVER CREST",
    "Smart Home",
    "Sokany",
    "Solstar",
    "Sonifer",
    "Sonik",
    "SQ Professional",
    "Stainless",
    "Star Master",
    "Starry",
    "Swan",
    "Syinix",
    "Synix",
    "Tefal",
    "TOMSHOO",
    "Tornado",
    "Tower",
    "Unique21",
    "Victory",
    "Vinod",
    "WEST BIKING",
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
