import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CgChevronDown } from "react-icons/cg";

const sortOptions = [
  "Popularity",
  "New Arrivals",
  "Price: Low to High",
  "Price: High to Low",
  "Product Rating",
];

export default function SortMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] =
    React.useState<string>("Popularity");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    handleClose();
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
          color: "black",
          backgroundColor: open ? "lightgray" : "transparent",
          "&:active": {
            backgroundColor: "lightgray",
          },
        }}
      >
        <span className="font-semibold text-[14px] ">
          Sort <span className="lowercase">by</span>:
        </span>
        <span className="ml-2"></span>
        <span className=""> {selectedOption}</span>
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
        <div className="">
          {sortOptions.map((option) => (
            <MenuItem key={option} onClick={() => handleSelect(option)}>
              <FormControlLabel
                control={<Radio checked={selectedOption === option} />}
                label={option}
              />
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
}
