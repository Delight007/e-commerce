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
    "Bajaj",
    "BARDEFU",
    "Binatone",
    "Black & Decker",
    "Boscon",
    "Breville",
    "Buchymix",
    "BUSHBURGH",
    "Camry",
    "Century",
    "Cookworks",
    "Crown Star",
    "Daewoo",
    "DeLonghi",
    "Dessini",
    "Electric Bottle Opener",
    "Eurosonic",
    "Fashion",
    "Geepas",
    "Gemat",
    "Generic",
    "George Foreman",
    "George Home",
    "Gourmet",
    "Gsr",
    "Havells",
    "Hisense",
    "Hoffmans",
    "Instant",
    "itel",
    "Jata",
    "JD SMP",
    "Jumia Bundles",
    "Kinelco",
    "King Style",
    "Kitchen Genie",
    "Kitchen Set",
    "Lexical",
    "LG",
    "Linsan",
    "Lontor",
    "Master Chef",
    "Maxi",
    "Maximus",
    "Midea",
    "Morphy Richards",
    "Moulinex",
    "Nicer Dicer Plus",
    "Nima",
    "Ninja",
    "Nutribullet",
    "Oraimo",
    "Oster",
    "Paloma",
    "Panasonic",
    "Philips",
    "Pinnacle",
    "Polystar",
    "Prestige",
    "Prima",
    "Progress",
    "Pyramid",
    "Qasa",
    "Queens",
    "Queen Time",
    "Quinix",
    "RAF",
    "Rashnik",
    "RAYLUX",
    "Rico",
    "Rite Tek",
    "Rohnson",
    "Royal",
    "Russell Hobbs",
    "Saisho",
    "Salter",
    "Samsung",
    "Scanfrost",
    "Scarlet",
    "Scarlett",
    "Shake N Take",
    "Sharp",
    "SILVER CREST",
    "Sokany",
    "Sonifer",
    "Sonik",
    "SQ Professional",
    "Stirling",
    "Swan",
    "Syinix",
    "Synix",
    "Tesco",
    "Tower",
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
