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
    "AKT",
    "Andrakk",
    "Arctic",
    "Aucma",
    "Ava",
    "BB",
    "Beldray",
    "Bianco Power",
    "Binatone",
    "Boscon",
    "Bruhm",
    "CAFINI",
    "Century",
    "Century 130",
    "Challenge",
    "Cloud Energy",
    "Crown Brand",
    "Daewoo",
    "Dp",
    "Dp Led",
    "Dp Led Light",
    "Duravolt",
    "Dura Volts",
    "Essentiel",
    "Eurosonic",
    "Fan",
    "Fashion",
    "Futina",
    "FUZHAO",
    "Generic",
    "Genetic",
    "Glamstar",
    "Great Neck",
    "Gsr",
    "Gst",
    "Handheld",
    "Havells",
    "Hc",
    "Home Comfort Brand",
    "Homedics",
    "Homeflower",
    "Iris Ohyama",
    "Itec",
    "itel",
    "Iwin",
    "IWIN ENERGY",
    "Jis",
    "JR",
    "Kam",
    "Kamisafe",
    "Kdk",
    "Kenstar",
    "Lexical",
    "Linsan",
    "Lontis",
    "Lontor",
    "Loveyin",
    "Manrose",
    "Maxi",
    "Mini",
    "Mini Fan",
    "Miratec",
    "MyFan",
    "Nexus",
    "Nunix",
    "Ocube",
    "Oraimo",
    "Orl",
    "OST",
    "Ox",
    "Panasonic",
    "Polystar",
    "Power Deluxe",
    "Qasa",
    "Restpoint",
    "Royal",
    "Rzants",
    "Scanfrost",
    "SILVER CREST",
    "SMC",
    "Sokany",
    "Sola",
    "Solar",
    "SOLAR ACCESS",
    "SOLITEC",
    "Sonik",
    "Space",
    "Sun King",
    "Syinix",
    "Taigexin",
    "TINMO",
    "TMT",
    "TSES",
    "Usams",
    "Usb",
    "WK",
    "Wow",
    "ZK",
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
