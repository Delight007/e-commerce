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
    { name: "Blenders", link: "/blenders" },
    { name: "Deep Fryers", link: "/deep" },
    { name: "Juicers", link: "/juicer" },
    { name: " Air Fryers", link: "/airFryers" },
    { name: " Rice Cookers", link: "/riceCookers" },
    { name: "Toasters & Oven", link: "/toastersOven" },
    { name: "Microwaves", link: "/microwaves" },
    { name: "Bundles", link: "/bundles" },
    { name: "Vacuum Cleaners", link: "/vacuumCleaner" },
    { name: "Kettles", link: "/kettles" },
    { name: "Yam Pounders", link: "/yamPounders" },
    { name: "Irons", link: "/irons" },
    { name: "Electric Cookware", link: "/electricCookware" },
    { name: "Electric Drink Mixers", link: "/drinkMixer" },
    { name: "Food Processors", link: "/foodProcessors" },
    { name: "Coffee Makers", link: "/coffeeMakers" },
    { name: " Electric Pressure Cookers", link: "/pressureCookers" },
  ];
  const largeAppliances = [
    { name: "Washing Machines", link: "/ washingMachines" },
    { name: "Fridges", link: "/fridges" },
    { name: "Freezers", link: "/freezers" },
    { name: "Air Conditioners", link: "/airConditioners" },
    { name: "Heaters", link: "/heaters" },
    { name: "Fans", link: "/fans" },
    { name: "Air Purifiers", link: "/purifiers" },
    { name: "Water Dispensers", link: "/waterDispensers" },
    { name: "Generators & Inverters", link: "/generators_Inverters" },
  ];
  const homeAppliances = [
    { name: "Nexus", link: "/nexus" },
    { name: "Hisense", link: "/hisense" },
    { name: "Polystar", link: "/polystar" },
    { name: "TCL", link: "/tcl" },
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
          "&:hover": {
            color: "red",
          },
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
                <Link href="">
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
                <Link href="">
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
