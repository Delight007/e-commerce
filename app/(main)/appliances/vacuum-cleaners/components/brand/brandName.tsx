"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function BrandName() {
  const brands = [
    "3M",
    "915 Generation",
    "Akrapovic",
    "ALLBRITE",
    "Amsamotion",
    "Anself",
    "Beldray",
    "Bestauty",
    "Black & Decker",
    "Bsn",
    "Bush",
    "Cdi",
    "D&D",
    "Daewoo",
    "Defender",
    "Denso",
    "Earth",
    "Easy Home",
    "Emax",
    "ENCHEN",
    "Fashion",
    "Flanger",
    "FOVAL",
    "Generic",
    "Goolrc",
    "Gub",
    "Honda",
    "Household Essentials",
    "Huake",
    "Ina",
    "Ione",
    "Iris Ohyama",
    "itel",
    "Iwin",
    "Iztoss",
    "Jx",
    "Kingston",
    "Konka",
    "Konnwei",
    "Lancol",
    "Lavor",
    "Lexical",
    "Lion",
    "Master Lock",
    "Mitchell",
    "Mopar",
    "Neill Tools T A Spear Jackson",
    "Nikai",
    "Oraimo",
    "Philips",
    "Porodo",
    "Puluz",
    "Roland Sands Design",
    "Salter",
    "SILVER CREST",
    "Sokany",
    "Sonifer",
    "SURPASS HOBBY",
    "Tenwin",
    "Tesco",
    "TIMBUTUS",
    "Tirol",
    "Torch",
    "TOTAL",
    "Tower",
    "UNIT",
    "VACUUM",
    "Vacuum Bags",
    "VIC",
    "XIAOMI",
    "XK",
    "YangZi",
    "Yosoo",
    "ZD Racing",
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
