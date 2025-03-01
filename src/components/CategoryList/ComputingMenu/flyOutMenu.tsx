import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { FaTv } from "react-icons/fa";
import Link from "next/link";

export default function HoverPopoverComputing() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const computer = [
    { name: "Desktops", link: "/desktops" },
    { name: "Laptops", link: "/laptops" },
    { name: "Macbooks", link: "/macbooks" },
    { name: "Gaming Laptops", link: "/gaming-pc-laptops" },
    { name: "HP Elitebook", link: "/ hp-laptops" },
    { name: "Dell Latitude", link: "/del-latitude" },
    { name: "Lenovo Thinkpad", link: "/lenovo-thinkpad" },
    { name: "Asus Zenbook", link: "/asus-zenbook" },
  ];

  const data = [
    { name: "External Hard Drives", link: "/external-hard-drives" },
    { name: "USB Flash Drives", link: "/usb-flash" },
    { name: "External Solid State", link: "/external-solid-state" },
  ];

  const printer = [
    { name: " Inkjet Printers", link: "/inkjet-printer" },
    { name: "Laser Printers", link: "/laser-printer" },
    { name: "Printer Ink & Toner", link: "/printer_ink & toner" },
  ];

  const Accessories = [
    { name: "Keyboards & Mice", link: "/keyboard & mice" },
    { name: "PC Gaming Hardware", link: "/pc_gaming_hardware" },
    { name: "Uninterrupted Power Supply", link: "/uninterrupted_power_supply" },
    { name: "Memory Cards", link: "/memory_cards" },
    { name: "Batteries", link: "/batteries" },
    { name: "Scanners", link: "/scanners" },
    { name: "Video Projectors", link: "/video_projectors" },
    { name: "Bluetooth Keyboards", link: "/bluetooth_keyboard" },
    { name: " Bluetooth Mouse", link: "/bluetooth_mouse" },
  ];

  const brand = [
    { name: "HP", link: "/hp" },
    { name: "Lenovo", link: "/lenovo" },
    { name: "Apple", link: "/apple" },
    { name: "Apple", link: "/apple" },
    { name: "ASUS", link: "/asus" },
    { name: "Huawei", link: "/huawei" },
    { name: "Microsoft", link: "/microsoft" },
    { name: "Kingston", link: "/kingston" },
    { name: "Seagate", link: "/seagate" },
    { name: "Samsung", link: "/samsung" },
    { name: "Sandisk", link: "/sandisk" },
    { name: "Toshiba", link: "/toshiba" },
  ];

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
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
          "&:hover": {
            color: "red",
          },
        }}
      >
        <FaTv className="text-xl" />
        <span> Computing </span>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          mt: "-146px",
          ml: "-3px",
          zIndex: 10,
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
        disableScrollLock={true}
        disablePortal
        container={document.body}
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
              paddingLeft: "16px",
              paddingTop: "8px",
              paddingRight: "16px",
              width: "722px",
              minHeight: "376px",
              backgroundColor: "white",
            }}
          >
            <div className="grid grid-cols-3 gap-8">
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div className="">
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderBottom: "1px solid lightgrey",
                        fontSize: "12px",
                        paddingBottom: "4px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Computers
                    </Typography>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "gray",
                      paddingTop: "4px",
                    }}
                  >
                    {computer.map((item) => (
                      <Link href={item.link} key={item.name}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            "&:hover": {
                              fontWeight: "bold",
                              color: "black",
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </div>
                <div className="">
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderBottom: "1px solid lightgrey",
                        fontSize: "12px",
                        paddingBottom: "4px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Data Storage
                    </Typography>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "gray",
                      paddingTop: "4px",
                    }}
                  >
                    {data.map((item) => (
                      <Link href={item.link} key={item.name}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            "&:hover": {
                              fontWeight: "bold",
                              color: "black",
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </div>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div className="">
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderBottom: "1px solid lightgrey",
                        fontSize: "12px",
                        paddingBottom: "4px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Printers
                    </Typography>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "gray",
                      paddingTop: "4px",
                    }}
                  >
                    {printer.map((item) => (
                      <Link href={item.link} key={item.name}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            "&:hover": {
                              fontWeight: "bold",
                              color: "black",
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </div>
                <div className="">
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderBottom: "1px solid lightgrey",
                        fontSize: "12px",
                        paddingBottom: "4px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Computer Accessories
                    </Typography>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "gray",
                      paddingTop: "4px",
                    }}
                  >
                    {Accessories.map((item) => (
                      <Link href={item.link} key={item.name}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            "&:hover": {
                              fontWeight: "bold",
                              color: "black",
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </div>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div className="">
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderBottom: "1px solid lightgrey",
                        fontSize: "12px",
                        paddingBottom: "4px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Top Brands
                    </Typography>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "gray",
                      paddingTop: "4px",
                    }}
                  >
                    {brand.map((item) => (
                      <Link href={item.link} key={item.name}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            "&:hover": {
                              fontWeight: "bold",
                              color: "black",
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </div>
              </Box>
            </div>
          </Box>
        </div>
      </Popover>
    </div>
  );
}
