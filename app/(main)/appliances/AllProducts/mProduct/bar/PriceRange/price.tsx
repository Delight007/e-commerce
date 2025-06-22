import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import * as React from "react";
import { CgChevronDown } from "react-icons/cg";
import RangeSliderUi from "./priceUI";

export default function PriceRange2() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontSize: "14px",
          textTransform: "capitalize",
          height: "33px",
          color: "black",

          backgroundColor: open ? "darkgray" : "#CBD5E1",
          "&:active": {
            backgroundColor: "lightgray",
          },
        }}
      >
        <span className="">Price</span>
        <CgChevronDown
          className={`transition-transform duration-300 ml-2 ${
            open ? "rotate-180" : ""
          }`}
        />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        disableScrollLock={true}
        sx={{
          zIndex: 10,
        }}
        anchorOrigin={{
          vertical: "bottom", // ✅ Positions the menu below the button
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="py-2 px-5">
          <RangeSliderUi />
        </div>
      </Menu>
    </div>
  );
}
