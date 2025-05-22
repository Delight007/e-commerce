"use client";
import Categories from "@/src/components/CategoryList/categories";
import * as React from "react";
import Popover from "@mui/material/Popover";
import { MdMenu } from "react-icons/md";
import { Box } from "@mui/material";

export default function MenuPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    closeTimeout.current = setTimeout(() => {
      setAnchorEl(null);
    }, 300);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Box
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          fontSize: "25px",
          fontWeight: "100",
        }}
      >
        <MdMenu />
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          maxWidth: "200px",
          maxHeight: "600px",
          "& .MuiPopover-paper": {
            pointerEvents: "auto",
            mt: 1.5, // Add margin top to make space for the arrow
            overflow: "visible", // Important to make the arrow visible outside the popover
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        disableScrollLock={true}
      >
        <div
          onMouseEnter={() => {
            if (closeTimeout.current) {
              clearTimeout(closeTimeout.current);
            }
          }}
          onMouseLeave={handlePopoverClose}
          style={{ position: "relative" }}
        >
          {/* Arrow element */}
          <Box
            sx={{
              position: "absolute",
              top: -8,
              left: 5,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "rotate(45deg)",
              border: "1px solid",
              borderColor: "divider",
              borderRight: "none",
              borderBottom: "none",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              width: "210px",
              height: "376px",
              position: "relative",
            }}
          >
            <div className="flex flex-col rounded-md border bg-white w-full h-full">
              <Categories />
            </div>
          </Box>
        </div>
      </Popover>
    </div>
  );
}
