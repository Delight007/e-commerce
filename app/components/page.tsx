"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { CgMoreO } from "react-icons/cg";

export default function PopoverOther() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setAnchorEl(null);
    }, 100);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="">
      <Box
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          fontSize: "12px",
          display: "flex",
          gap: "4px",
          width: "208px",
          height: "38px",
          paddingLeft: "8px",
          alignItems: "center",
        }}
      >
        <CgMoreO className="text-xl" />
        <span>Other Categories</span>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          mt: "-1px",
          ml: "-3px",
          "& .MuiPaper-root": {
            pointerEvents: "auto",
            boxShadow: "none",
            borderLeft: "1px solid lightgrey",
            borderRadius: "0px 8px 8px 0px", // Right-side border-radius only
            maxWidth: "722px",
          },
        }}
        open={open}
        anchorEl={anchorEl}
        // anchorOrigin={{ vertical: "top", horizontal: "right" }}
        // transformOrigin={{ vertical: "top", horizontal: "left" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
      >
        <div
          onMouseEnter={() => {
            if (closeTimeout.current) {
              clearTimeout(closeTimeout.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Box
            sx={{
              p: 1,
              Width: "722px",
              height: "376px",
              backgroundColor: "white",
            }}
          >
            <Typography>PopOver</Typography>
          </Box>
        </div>
      </Popover>
    </div>
  );
}
