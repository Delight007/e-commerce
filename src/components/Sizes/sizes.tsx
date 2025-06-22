"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function Sizes() {
  const sizes = [
    "32",
    "32.0",
    "40.0",
    "43",
    "43.0",
    "50.0",
    "55.0",
    "58",
    "65.0",
  ];

  return (
    <FormGroup>
      <div className=" py-2">
        <h2 className="uppercase font-semibold text-[13px] ">Display size</h2>
      </div>
      <div className="overflow-y-auto overflow-x-hidden h-[198px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Render checkbox for each size */}
        {sizes.map((size, index) => (
          <Box
            key={size}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "8px",
              paddingRight: "8px",
              paddingTop: "4px",
              paddingBottom: "4px",

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
              label={<span className="text-sm ml-1">{size}</span>}
            />
          </Box>
        ))}
      </div>
    </FormGroup>
  );
}
