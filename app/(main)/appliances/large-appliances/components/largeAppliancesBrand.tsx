import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { CgChevronDown } from "react-icons/cg";
import DropDownBrand from "./bar/components/dropDownMenu";

export default function LargeAppliancesBrandsMenu() {
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
          //   background: "lightgray",
          backgroundColor: open ? "darkgray" : "#CBD5E1",
          "&:active": {
            backgroundColor: "lightgray",
          },
        }}
      >
        <span className="">Brand</span>
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
          // width: "278px",
          "& .MuiPaper-root": {
            marginTop: "0px",
            marginBottom: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
          },
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
        <div className="p-2  w-[270px]">
          <DropDownBrand />
        </div>

        <div className="flex w-[270px] h-[50px] flex-1 p-2 justify-between text-zinc-400 gap-1 font-medium text-[12px]">
          <button className="border h-full w-[200px] rounded-md disabled:">
            Clear all
          </button>
          <button className="border h-full w-[200px] bg-zinc-400 text-[12px] font-medium text-white rounded-md disabled:">
            Save
          </button>
        </div>
      </Menu>
    </div>
  );
}
