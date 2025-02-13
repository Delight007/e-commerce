"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

interface MenuItemProps {
  icon?: React.ReactNode;
  label: string;
  link: string;
}

interface BasicMenuProps {
  buttonText: string;
  buttonIcon?: React.ReactNode;
  menuItems: MenuItemProps[];
  spanButton?: React.ReactNode;
}

export default function BasicMenu({
  buttonText,
  menuItems,
  buttonIcon,
  spanButton,
}: BasicMenuProps) {
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
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "black",
          fontWeight: "550",
          fontSize: "16px",
          textTransform: "capitalize",
          display: "flex",
          gap: "8px",
          "&:hover": {
            color: "red",
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "lightgray",
          },
          "&:focus": {
            outline: "none",
            backgroundColor: "lightgray",
          },
        }}
      >
        <span className="text-2xl"> {buttonIcon && buttonIcon}</span>
        {buttonText}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
        PaperProps={{
          style: {
            width: "206px",
            height: "autoHeight",
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
          },
        }}
      >
        <MenuItem
          sx={{
            padding: "16px",
            borderBottom: "1px solid lightgray",
            "&:hover": {
              backgroundColor: "transparent", // ✅ Prevents hover effect
            },
            cursor: "default",
          }}
        >
          <Button
            sx={{
              textTransform: "capitalize",
              color: "white",
              background: "red",
              display: "flex",
              margin: "auto",
              width: "174px",
              height: "40px",
              fontWeight: "600",
            }}
          >
            {spanButton}
          </Button>
        </MenuItem>

        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "14px",
              padding: "16px",
              "&:hover": {
                fontWeight: "600",
              },
            }}
          >
            <span className="text-xl">{item.icon}</span>
            <Link href={item.link}>{item.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
