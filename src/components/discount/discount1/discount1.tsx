"use client";
import * as React from "react";
import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { FormControlLabel, FormGroup, Radio, Typography } from "@mui/material";

export default function Discount1() {
  const [hover, setHover] = React.useState(false);
  const [selected, setSelected] = React.useState<boolean | null>(null);

  const value = 1.0;

  function handleChange() {
    setSelected((prev) => (prev === true ? null : true));
  }

  return (
    <FormGroup
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        paddingTop: "4px",
        paddingBottom: "4px",
      }}
    >
      <FormControlLabel
        control={
          <Radio
            checked={selected === true}
            onClick={handleChange}
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
            sx={{
              width: 200,
              display: "flex",
              gap: "5px",
              alignItems: "center",
              fontSize: "14px",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Typography sx={{ fontSize: "14px" }}>50%</Typography>
            <span> or more</span>
          </Box>
        }
      />
    </FormGroup>
  );
}
