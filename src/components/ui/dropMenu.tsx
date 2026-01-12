// "use client";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Link from "next/link";
// import * as React from "react";
// import { CgChevronDown } from "react-icons/cg";

// interface MenuItemProps {
//   icon?: React.ReactNode;
//   label: string;
//   link: string;
//   onClick?: () => void;
// }

// interface BasicMenuProps {
//   buttonText: string;
//   buttonIcon?: React.ReactNode;
//   menuItems: MenuItemProps[];
//   spanButton?: React.ReactNode;
// }

// export default function BasicMenu({
//   buttonText,
//   menuItems,
//   buttonIcon,
//   spanButton,
// }: BasicMenuProps) {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//         sx={{
//           color: "black",
//           fontWeight: "550",
//           fontSize: "16px",
//           textTransform: "capitalize",
//           display: "flex",
//           gap: "5px",
//           background: open ? "lightgray" : "transparent",
//           "&:hover": {
//             color: "red",
//             backgroundColor: "transparent",
//           },
//           "&:active": {
//             backgroundColor: "lightgray",
//           },
//         }}
//       >
//         <span className="lg:text-xl text-lg font-semibold">
//           {buttonIcon && buttonIcon}
//         </span>
//         <span className="text-base "> {buttonText}</span>
//         <CgChevronDown
//           className={`transition-transform duration-300 lg:ml-2 m-0 ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{ "aria-labelledby": "basic-button" }}
//         PaperProps={{
//           style: {
//             width: "200px",
//             height: "autoHeight",
//             backgroundColor: "#f4f4f4",
//             borderRadius: "8px",
//           },
//         }}
//         disableScrollLock={true}
//         sx={{ borderBottom: "1px solid lightgray" }}
//       >
//         {menuItems.map((item, index) => (
//           <MenuItem
//             key={index}
//             component={Link}
//             href={item.link}
//             onClick={handleClose}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               fontSize: "14px",
//               gap: "14px",
//               padding: "16px",
//               "&:hover": {
//                 fontWeight: "600",
//               },
//             }}
//           >
//             <span className="text-xl">{item.icon}</span>
//             <span>{item.label}</span>
//           </MenuItem>
//         ))}

//         <MenuItem
//           sx={{
//             padding: "16px",
//             borderTop: "1px solid lightgray",
//             "&:hover": {
//               backgroundColor: "transparent", // ✅ Prevents hover effect
//             },
//             cursor: "default",
//           }}
//         >
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               color: "white",
//               background: "red",
//               display: "flex",
//               margin: "auto",
//               width: "174px",
//               height: "40px",
//               fontWeight: "600",
//             }}
//           >
//             {spanButton}
//           </Button>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }

"use client";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import * as React from "react";
import { CgChevronDown } from "react-icons/cg";

interface MenuItemProps {
  icon?: React.ReactNode;
  label: string;
  link: string;
  onClick?: () => void;
}

interface ActionButtonProps {
  type: "logout" | "login";
  onClick?: () => void; // only for logout
}

interface BasicMenuProps {
  buttonText: string;
  buttonIcon?: React.ReactNode;
  menuItems: MenuItemProps[];
  actionButton?: ActionButtonProps;
  spanButton?: React.ReactNode; // for custom buttons like Live chats
}

const buttonStyles = {
  textTransform: "capitalize",
  color: "white",
  background: "red",
  display: "flex",
  margin: "auto",
  width: "174px",
  height: "40px",
  fontWeight: "600",
};

export default function BasicMenu({
  buttonText,
  menuItems,
  buttonIcon,
  actionButton,
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
          gap: "5px",
          background: open ? "lightgray" : "transparent",
          "&:hover": {
            color: "red",
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "lightgray",
          },
        }}
      >
        {buttonIcon && (
          <span className="lg:text-xl text-lg font-semibold">{buttonIcon}</span>
        )}
        <span className="text-base">{buttonText}</span>
        <CgChevronDown
          className={`transition-transform duration-300 lg:ml-2 m-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
        PaperProps={{
          style: {
            width: "200px",
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
          },
        }}
        disableScrollLock={true}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            component={Link}
            href={item.link}
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
            {item.icon && <span className="text-xl">{item.icon}</span>}
            <span>{item.label}</span>
          </MenuItem>
        ))}

        {/* Custom JSX button like Live chats */}
        {spanButton && (
          <MenuItem
            sx={{
              padding: "16px",
              borderTop: "1px solid lightgray",
              "&:hover": { backgroundColor: "transparent" },
              cursor: "default",
            }}
          >
            <Button sx={buttonStyles}>{spanButton}</Button>
          </MenuItem>
        )}

        {/* Login / Logout button */}
        {actionButton && (
          <MenuItem
            sx={{
              padding: "16px",
              borderTop: "1px solid lightgray",
              "&:hover": { backgroundColor: "transparent" },
              cursor: "default",
            }}
          >
            {actionButton.type === "logout" && (
              <Button onClick={actionButton.onClick} sx={buttonStyles}>
                Logout
              </Button>
            )}
            {actionButton.type === "login" && (
              <Button component={Link} href="/login" sx={buttonStyles}>
                Sign in
              </Button>
            )}
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
