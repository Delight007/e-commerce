"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "915 Generation",
    "Aeon",
    "AKAI",
    "Andrakk",
    "Andrew James",
    "Apg",
    "Beko",
    "Beldray",
    "Binatone",
    "Bluestar",
    "Bona",
    "Brimix",
    "Brs",
    "Bruhm",
    "BUC",
    "Carsunshades",
    "Century",
    "Crown Star",
    "D-Marc",
    "Daewoo",
    "Duravolt",
    "Eurosonic",
    "Fashion",
    "FIRMAN",
    "Fitron",
    "Freezeclime",
    "Garrett",
    "Generic",
    "Gs",
    "Gsr",
    "Haers",
    "Haier Thermocool",
    "Haus Strom",
    "Hisense",
    "Hishine",
    "Hope",
    "Ignis",
    "Image",
    "Ingco",
    "Jnj",
    "Jonsbo",
    "K9",
    "Kensta",
    "Kenstar",
    "Kinelco",
    "Lexical",
    "LG",
    "Lixada",
    "Luna",
    "Machines",
    "Made",
    "Master Chef",
    "Max",
    "Maxi",
    "Meling",
    "Middia",
    "Midea",
    "Midia",
    "Newcastle",
    "Nexus",
    "Panaosnic",
    "Panasonic",
    "Phiima",
    "Pixel",
    "Pol",
    "Polystar",
    "Qasa",
    "Restpoint",
    "Royal",
    "Samsung",
    "Scanfrost",
    "Sharp",
    "Skyrun",
    "Snowsea",
    "Sokany",
    "Stirling",
    "Sumec",
    "Sumo",
    "Supertek",
    "SuperTex",
    "Sweet Home",
    "Syinix",
    "Tamashi",
    "TCL",
    "TechCool",
    "TECHNOCOOL",
    "TEKNOCOOL",
    "TMT",
    "TOMSHOO",
    "Tornado",
    "Tuya",
    "UC",
    "UNIC",
    "Wind",
    "World Elite",
    "Yoko",
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
