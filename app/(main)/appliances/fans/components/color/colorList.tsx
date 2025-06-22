"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fugaz_One } from "next/font/google";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function ColorList() {
  const colors = [
    "Beige",
    "Black  ",
    "Blue",
    "Brown",
    "Gold",
    "Green",
    "Grey",
    "Multi",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "Silver",
    "White",
    "Yellow",
  ];
  return (
    <FormGroup>
      {colors.map((color, index) => (
        <Box
          key={color}
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
            label={<span className="text-sm ml-1">{color}</span>}
          />
        </Box>
      ))}
    </FormGroup>
  );
}
