import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { LuCookingPot } from "react-icons/lu";
import Link from "next/link";

export default function HoverPopoverAppliances() {
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
        <LuCookingPot className="text-xl" />
        <span>Appliances</span>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          mt: "-2px",
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
              paddingLeft: "16px",
              paddingTop: "8px",
              paddingRight: "16px",
              width: "722px",
              minHeight: "376px",
              backgroundColor: "white",
            }}
          >
            <div className="grid grid-cols-3 gap-2 ">
              <div className="">
                <Link href="#">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      borderBottom: "1px solid lightgrey",
                      paddingBottom: "4px",
                    }}
                  >
                    Small Appliances
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
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Blenders
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Deep Fryers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Juicers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      {" "}
                      Air Fryers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Rice Cookers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Toasters & Oven
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Microwaves
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Bundles
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Vacuum Cleaners
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Kettles
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Yam Pounders
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Irons
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Electric Cookware
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Electric Drink Mixers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Food Processors
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Coffee Makers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Electric Pressure Cookers
                    </Typography>
                  </Link>
                </Box>
              </div>
              <div className="">
                <Link href="">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      borderBottom: "1px solid lightgrey",
                      paddingBottom: "4px",
                    }}
                  >
                    Large Appliances
                  </Typography>
                </Link>
                <Box
                  sx={{
                    display: " flex",
                    flexDirection: "column",
                    paddingTop: "4px",
                    color: "gray",
                  }}
                >
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      {" "}
                      Refrigerators
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Washing Machines
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      {" "}
                      Dryers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Dishwashers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Ovens
                    </Typography>
                  </Link>
                </Box>
              </div>
              <div className="">
                <Link href="">
                  {" "}
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      borderBottom: "1px solid lightgrey",
                      paddingBottom: "4px",
                    }}
                  >
                    Home Appliances
                  </Typography>
                </Link>
                <Box
                  sx={{
                    fontSize: "12px",
                    display: " flex",
                    flexDirection: "column",
                    paddingTop: "4px",
                    color: "gray",
                  }}
                >
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      {" "}
                      Air Purifiers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Vacuum Cleaners
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      {" "}
                      Humidifiers
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Fans
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          fontWeight: "bold",
                          color: "black",
                        },
                      }}
                    >
                      Heaters
                    </Typography>
                  </Link>
                </Box>
              </div>
            </div>
          </Box>
        </div>
      </Popover>
    </div>
  );
}
