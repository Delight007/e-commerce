"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function PhoneBrandMenu() {
  const brands = [
    "1More",
    "24 7 FASHION",
    "915 Generation",
    "A-Line",
    "Ace Elec",
    "AEC",
    "Andoer",
    "Anker",
    "Apple",
    "Aq General",
    "Atouch",
    "Awei",
    "Bdf",
    "Bebe",
    "BEBE TAB",
    "Bontel",
    "Buda",
    "Chupez",
    "Cool Cases",
    "Digifon",
    "Fashion",
    "Flick",
    "Flip Cover",
    "Gadget",
    "Generic",
    "Genetic",
    "Google",
    "Google Pixel",
    "GREEN LION",
    "Havit",
    "Hi Watch",
    "Honor",
    "Huawei",
    "Infinix",
    "itel",
    "Jbl",
    "Koleer",
    "Kotion Each",
    "Kz",
    "Ldnio",
    "Lenovo",
    "LOKMAT",
    "Model Model Band",
    "MOL",
    "Motorola",
    "Myscreen Protector",
    "Nanu",
    "New Age",
    "New Rixing",
    "Nilkin",
    "Nillkin",
    "Nokia",
    "Nothing",
    "Oneplus",
    "Oppo",
    "Oraimo",
    "Otter Box",
    "P47",
    "Panasonic",
    "Philly",
    "Poco",
    "Pone Case",
    "POOLEE",
    "Pouch",
    "Puluz",
    "Qkz",
    "Realme",
    "Recrsi",
    "Remax",
    "Renewed",
    "Rohs",
    "Romoss",
    "Rzants",
    "Sabbat",
    "Samsung",
    "SanDisk",
    "Series 8 Fitness",
    "SHPLUS",
    "Sony",
    "SOYES",
    "Styluxe",
    "Sunsky",
    "Suunto",
    "T&G",
    "T55 SMART WATCH",
    "Tecno",
    "Thinkplus",
    "TYPE A1",
    "Type Z",
    "Ultra",
    "UMIDIGI",
    "Vivo",
    "WIRELESS CHARGER",
    "WK",
    "Wster",
    "XIAOMI",
    "XP-PEN",
    "Xundd",
    "Zealot",
    "Zeblaze",
  ];

  return (
    <FormGroup>
      {brands.map((brand, index) => (
        <Box
          key={brand}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
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
                  padding: "3px", // Ensure padding so background is visible
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
