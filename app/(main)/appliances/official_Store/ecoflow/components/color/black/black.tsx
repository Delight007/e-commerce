"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fugaz_One } from "next/font/google";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function BlackColor() {
  const [hover, setHover] = React.useState(false);
  return (
    <FormGroup>
      <FormControlLabel
        sx={{ marginRight: 0 }}
        control={
          <Checkbox
            sx={{
              // color: "",
              "&.Mui-checked": { color: "red" },
              backgroundColor: hover ? "lightgreen" : "transparent", // Change background on hover
              borderRadius: "50%", // Make it rounded
              transition: "background-color 0.3s ease-in-out", // Smooth effect
              padding: "5px", // Ensure padding so background is visible
              transform: "scale(1.0)", // Reduce checkbox size
            }}
          />
        }
        label={
          <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Typography
              sx={{
                marginLeft: "1px",
              }}
            >
              <span className="text-[13px]  py-[2px] px-1">black</span>
            </Typography>
          </Box>
        }
      />
    </FormGroup>
  );
}
