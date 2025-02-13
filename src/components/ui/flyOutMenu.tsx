import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MouseHoverPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="">
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{ fontSize: "12px" }}
      >
        Appliances
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          mt: "-13px",
          ml: "126px",
          "& .MuiPaper-root": {
            backgroundColor: "blue",
            boxShadow: "none",
            borderLeft: "1px solid lightgrey",
            borderRadius: "0px 8px 8px 0px", // Right-side border-radius only
            maxWidth: "400px",
            maxHeight: "100%",
            position: "relative",
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          sx={{
            p: 1,
            Width: "100%",
            height: "376px",
            // borderRadius: "0px 8px 8px 0px", // Right-side border-radius only
            backgroundColor: "white",
            // position: "abosolute",
          }}
        >
          <Typography>PopOver</Typography>
        </Box>
      </Popover>
    </div>
  );
}
