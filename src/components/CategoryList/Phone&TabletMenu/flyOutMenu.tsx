import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Link from "next/link";

export default function HoverPopoverPhone() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const mobilePhones = [
    { name: "Smartphones", link: "/smartphones" },
    { name: "Android Phones", link: "/android" },
    { name: "iPhones", link: "/iphones" },
    { name: "Basic Phones", link: "/basicPhones" },
    { name: "Refurbished Phones", link: "/refurbishedPhones" },
    { name: "Rugged Phones", link: "/ruggedPhones" },
    { name: "Cordless Telephones", link: "/cordlessTelephones" },
    { name: "Dual Sim Phones", link: "/dualSimPhones" },
  ];
  const mobileAccessories = [
    { name: "Accessory Kits", link: "/accessoryKits" },
    { name: "Adaptors", link: "/adaptors" },
    { name: "Batteries", link: "/battery" },
    { name: "Battery Chargers", link: "/batteryChargers" },
    { name: "Bluetooth Headsets", link: "/headsets" },
    { name: "Cables", link: "/cables" },
    { name: "Car Accessories", link: "/carAccessories" },
    { name: "Chargers", link: "/chargers" },
    { name: "Earphones & Headsets", link: "/earphones" },
    { name: "MicroSD Cards", link: "/sdCards" },
    { name: "Screen Protectors", link: "/screenProtectors" },
    { name: "Smart Watches", link: "/smartWatches" },
    { name: "Power Banks", link: "/powerBanks" },
    { name: "Phone Camera Lenses", link: "/cameraLense" },
  ];
  const SmartPhones = [
    { name: "iPhone 15 & 15 Pro Max", link: "/iphone_15_15ProMax" },
    {
      name: "Samsung Galaxy S24 & S24 Ultra",
      link: "/samsungGalaxy_S24_S24Ultra",
    },
    { name: "Techno Spark 20 & 20 Pro", link: "/techno_20_20Pro" },
    { name: "Itel S23 & S23 Plus", link: "/itel_S23_S23Plus" },
    { name: "Infinix Smart 8", link: "/infinixSmart_8" },
    { name: "Xiaomi Redmi 13C", link: "/xiaomiRedmi_13C" },
    { name: "Infinix Hot 40i", link: "/infinixHot_40i" },
    { name: "Techno Pop 8", link: "/technoPop_8" },
    { name: "Itel A70", link: "/itel_A70" },
  ];
  const Tablets = [
    { name: "iPads", link: "/iPads" },
    { name: "Android Tablets", link: "/android_table" },
    { name: "Educational Tablets", link: "/educational_tablets" },
    { name: " Tablet Accessories", link: "/table_accessories" },
    { name: "Amazon Fire Tablets", link: "/amazon_fire_tablets" },
    { name: " Microsoft Tablets", link: "/microsoft_tablets" },
  ];
  const Brands = [
    { name: "Samsung", link: "/samsung" },
    { name: "Apple", link: "/apple" },
    { name: "Xiaomi", link: "/xiaomi" },
    { name: "Itel", link: "/itel" },
    { name: "Tecno", link: "/tecno" },
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
        <IoPhonePortraitOutline className="text-xl" />

        <span>Phone & Tablet</span>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          mt: "-38px",
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
            <div className="grid grid-cols-3 gap-2 ">
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
                      mobile phones
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
                    {mobilePhones.map((item) => (
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
                      Tablets
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
                    {Tablets.map((item) => (
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
              <Box>
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
                    mobile accessories
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
                  {mobileAccessories.map((item) => (
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
                      Top SmartPhones
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
                    {SmartPhones.map((item) => (
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
                      Top Phone Brands
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
                    {Brands.map((item) => (
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
