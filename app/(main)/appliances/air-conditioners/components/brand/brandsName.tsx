"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "Aeon",
    "Andrew James",
    "Arctic",
    "Beko",
    "Beldray",
    "Binatone",
    "Bona",
    "Bruhm",
    "Carrier",
    "Century",
    "Daewoo",
    "Daikin",
    "Firman",
    "Generic",
    "Glamstar",
    "Gree",
    "Haier Thermocool",
    "Hisense",
    "Kenstar",
    "LG",
    "Lontor",
    "Midea",
    "Nexus",
    "Panasonic",
    "Pol",
    "Polystar",
    "Purch",
    "Royal",
    "Salter",
    "Samsung",
    "Scanfrost",
    "Sharp",
    "Skyrun",
    "SPL",
    "Sumec",
    "Supertek",
    "SuperTex",
    "Syinix",
    "Tamashi",
    "TCL",
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
