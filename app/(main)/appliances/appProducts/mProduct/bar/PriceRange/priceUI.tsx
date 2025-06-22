"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, TextField, Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSliderUi() {
  const [value, setValue] = React.useState<number[]>([631, 10000000]);

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "10px",
        }}
      >
        <Button
          sx={{
            // border: "1px solid gray",
            height: "30px",
            // fontSize: "12px",
            width: "120px",
            // color: "lightgrey",
            padding: "0",
            textTransform: "capitalize",
          }}
        >
          <span className="border w-full h-full rounded-md text-[12px] text-zinc-400 flex justify-center items-center">
            Reset
          </span>
        </Button>
        <Button
          sx={{
            height: "30px",
            // fontSize: "12px",
            width: "120px",
            // background: "grey",
            // color: "white",
            padding: "0",
            textTransform: "capitalize",
          }}
        >
          <span className="bg-zinc-400 w-full h-full rounded-md text-[12px] text-white flex justify-center items-center">
            Save
          </span>
        </Button>
      </Box>
    </Box>
  );
}
