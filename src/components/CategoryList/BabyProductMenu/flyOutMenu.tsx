import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { LuBaby } from "react-icons/lu";

export default function HoverPopoverBaby() {
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
    <div>
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
          height: "37px",
          paddingLeft: "8px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <LuBaby className="text-xl" />
        <span>Baby Products</span>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          mt: "-142px",
          ml: "-2px",
          pointerEvents: "none",
          "& .MuiPopover-paper": {
            pointerEvents: "auto",
            backgroundColor: "white",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            borderLeft: "1px solid lightgrey",
            borderRadius: "0px 8px 8px 0px",
            maxWidth: "722px",
          },
        }}
        open={open}
        anchorEl={anchorEl}
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
              p: 4,
              width: "722px",
              minHeight: "376px",
              backgroundColor: "white",
            }}
          >
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-4">
                <h2 className="font-semibold text-lg border-b pb-2">
                  Small Appliances
                </h2>
                <ul className="space-y-2">
                  <li>Coffee Makers</li>
                  <li>Blenders</li>
                  <li>Toasters</li>
                  <li>Food Processors</li>
                  <li>Microwaves</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-semibold text-lg border-b pb-2">
                  Large Appliances
                </h2>
                <ul className="space-y-2">
                  <li>Refrigerators</li>
                  <li>Washing Machines</li>
                  <li>Dryers</li>
                  <li>Dishwashers</li>
                  <li>Ovens</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-semibold text-lg border-b pb-2">
                  Home Appliances
                </h2>
                <ul className="space-y-2">
                  <li>Air Purifiers</li>
                  <li>Vacuum Cleaners</li>
                  <li>Humidifiers</li>
                  <li>Fans</li>
                  <li>Heaters</li>
                </ul>
              </div>
            </div>
          </Box>
        </div>
      </Popover>
    </div>
  );
}
