"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function Color() {
  const types = ["Grey", "Silver", "white", "Yellow"];

  return (
    <FormGroup>
      <div className=" py-2">
        <h2 className="uppercase font-semibold text-[13px] ">Color</h2>
      </div>
      <div>
        {/* Render checkbox for each size */}
        {types.map((type, index) => (
          <Box
            key={type}
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
              label={<span className="text-sm ml-1">{type}</span>}
            />
          </Box>
        ))}
      </div>
    </FormGroup>
  );
}
