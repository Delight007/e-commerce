import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { LuCookingPot } from "react-icons/lu";
import Link from "next/link";

export default function HoverPopoverAppliances() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const smallAppliances = [
    { name: "Blenders", link: "/appliances/blenders" },
    { name: "Deep Fryers", link: "/appliances/deep-fryers" },
    { name: "Juicers", link: "/appliances/juicers" },
    { name: "Air Fryers", link: "/appliances/air-fryers" },
    { name: "Rice Cookers", link: "/appliances/rice-cookers" },
    { name: "Toasters & Oven", link: "/appliances/ovens-toasters" },
    { name: "Microwaves", link: "/appliances/microwaves" },
    { name: "Bundles", link: "/appliances/bundles" },
    { name: "Vacuum Cleaners", link: "/appliances/vacuum-cleaners" },
    { name: "Kettles", link: "/appliances/kettles" },
    { name: "Yam Pounders", link: "/appliances/yam-pounders" },
    { name: "Irons", link: "/appliances/ironing-laundry" },
    { name: "Electric Cookware", link: "/appliances/electric-cookware" },
    { name: "Electric Drink Mixers", link: "/appliances/mixers" },
    { name: "Food Processors", link: "/appliances/food-processor" },
    { name: "Coffee Makers", link: "/appliances/coffee-makers" },
    { name: "Electric Pressure Cookers", link: "/appliances/pressure-cookers" },
  ];
  const largeAppliances = [
    { name: "Washing Machines", link: "/appliances/washers-dryers" },
    { name: "Fridges", link: "/appliances/fridges-freezers" },
    { name: "Freezers", link: "/appliances/fridges-freezers" },
    { name: "Air Conditioners", link: "/appliances/air-conditioners" },
    { name: "Heaters", link: "/appliances/space-heaters-accessories" },
    { name: "Fans", link: "/appliances/fans" },
    { name: "Air Purifiers", link: "/appliances/air-purifiers" },
    { name: "Water Dispensers", link: "#" },
    {
      name: "Generators & Inverters",
      link: "#",
    },
  ];
  const homeAppliances = [
    { name: "Nexus", link: "/appliances/official_Store/nexus" },
    { name: "Hisense", link: "/appliances/official_Store/hisense" },
    { name: "Polystar", link: "#" },
    { name: "TCL", link: "#" },
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
          width: "208px",
          height: "37px",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            color: "red",
          },
        }}
      >
        <Link
          href="/appliances"
          className="flex w-full h-full pl-2 items-center gap-[6px]"
        >
          <LuCookingPot className="text-xl" />

          <span>Appliances</span>
        </Link>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          mt: "-1px",
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
              <div className="">
                <Link href="/appliances/small-appliances">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      borderBottom: "1px solid lightgrey",
                      paddingBottom: "4px",
                      "&:hover": {
                        color: "red",
                      },
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
                  {smallAppliances.map((appliances) => (
                    <Link href={appliances.link} key={appliances.name}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          "&:hover": {
                            fontWeight: "bold",
                            color: "black",
                          },
                        }}
                      >
                        {appliances.name}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </div>
              <div className="">
                <Link href="/appliances/large-appliances">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      borderBottom: "1px solid lightgrey",
                      paddingBottom: "4px",
                      "&:hover": {
                        color: "red",
                      },
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
                  {largeAppliances.map((lappliances) => (
                    <Link href={lappliances.link} key={lappliances.name}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          "&:hover": {
                            fontWeight: "bold",
                            color: "black",
                          },
                        }}
                      >
                        {lappliances.name}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </div>
              <div className="">
                <Link href="/appliances">
                  {" "}
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      borderBottom: "1px solid lightgrey",
                      paddingBottom: "4px",
                      "&:hover": {
                        color: "red",
                      },
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
                  {homeAppliances.map((happliances) => (
                    <Link href={happliances.link} key={happliances.name}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          "&:hover": {
                            fontWeight: "bold",
                            color: "black",
                          },
                        }}
                      >
                        {happliances.name}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </div>
            </div>
          </Box>
        </div>
      </Popover>
    </div>
  );
}
