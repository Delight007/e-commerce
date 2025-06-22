"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, TextField, Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([631, 8200000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // Handle manual input change
  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = [...value];
      newValue[index] = Number(event.target.value);
      setValue(newValue);
    };

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="uppercase font-semibold text-[13px] ">PRICE (₦)</h2>
        <Button sx={{ textTransform: "capitalize", color: "red" }}>
          Apply
        </Button>
      </Box>

      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
        min={631} // Set minimum price
        max={10000000} // Set maximum price
        step={6000} // Set price step
        sx={{
          color: "red", // Change slider color to red
          padding: "0",
          "& .MuiSlider-thumb": { backgroundColor: "red" }, // Thumb (circle)
          "& .MuiSlider-track": { backgroundColor: "red" }, // Track (filled part)
          "& .MuiSlider-rail": { backgroundColor: "#ffcccc" }, // Rail (unfilled part)
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <TextField
          type="number"
          value={value[0]}
          onChange={handleInputChange(0)}
          sx={{
            width: 112,
            "& .MuiOutlinedInput-root": {
              height: 35,
              fontSize: 12,
            },
            "& .MuiOutlinedInput-input": {
              padding: "8px",
              fontSize: 12,
            },
          }}
        />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
          }}
        >
          -
        </Typography>
        <TextField
          type="number"
          value={value[1]}
          onChange={handleInputChange(1)}
          sx={{
            width: 112,
            "& .MuiOutlinedInput-root": {
              height: 35,
              fontSize: 12,
            },
            "& .MuiOutlinedInput-input": {
              padding: "8px",
              fontSize: 12,
            },
          }}
        />
      </Box>
    </Box>
  );
}
