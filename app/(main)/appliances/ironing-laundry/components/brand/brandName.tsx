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
    "Anchor",
    "Ariston",
    "Avinas",
    "Beldray",
    "Binatone",
    "Black & Decker",
    "Boscon",
    "Braun",
    "Breville",
    "Century",
    "Crown Star",
    "Daewoo",
    "Digicom",
    "DUNHOOD",
    "Fashion",
    "Generic",
    "George Home",
    "Goldcrown",
    "Goodmans",
    "Gsr",
    "Havells",
    "Hisense",
    "Home Basics",
    "Homeflower",
    "IRON",
    "JD SMP",
    "Kenstar",
    "Kinelco",
    "LG",
    "Morphy Richards",
    "Nikai",
    "Oraimo",
    "Panasonic",
    "Peg",
    "Perfect",
    "Philips",
    "Polder",
    "Polystar",
    "Privilege",
    "Purch",
    "Qasa",
    "Qilive",
    "RAF",
    "Rashnik",
    "Russell Hobbs",
    "Saisho",
    "Sayona",
    "Sokany",
    "Sonik",
    "Steam",
    "Sunbelt",
    "SUPER SONY",
    "Tefal",
    "Tobi",
    "Tower",
    "Uniball",
    "UNIC",
    "VIC",
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
