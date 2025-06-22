import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { MdLiveTv } from "react-icons/md";
import Link from "next/link";

export default function HoverPopoverElectronics() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const tv = [
    { name: " Televisions", link: "/televisions" },
    { name: "Smart TVs", link: "/smarttv" },
    { name: "LED & LCD TVs", link: "/led" },
    { name: "QLED & OLED TVs", link: "/qled" },
    { name: "Curved TV", link: "/curvedTv" },
    { name: "LG TV", link: "/lg" },
    { name: "Hisense TV", link: "/hisenseTV" },
    { name: "Samsung TV", link: "/samsungTV" },
    { name: "Smart TV 32 Inches", link: "/smartTV32" },
    { name: "Smart TV 43 Inches", link: "/smartTV43" },
    { name: "Smart TV 55 Inches", link: "/smartTV55" },
    { name: "TV Accessories", link: "/tv_accessories" },
    { name: "DVD Players & Recorders", link: "dvd_players_and_recorders" },
  ];

  const camera = [
    { name: "Digital Cameras", link: "/digital_cameras" },
    { name: "Projectors", link: "/projectors" },
    { name: "Video Surveillance", link: "/video_cameras" },
    { name: "CCTV Cameras", link: "/cctv_cameras" },
    { name: "Compact Cameras", link: "/compact_cameras" },
    { name: "SLR Digital Cameras", link: "/slrDigital_cameras" },
    { name: "Professional Video Cameras", link: "/professionalVideo_cameras" },
    { name: "Sport & Action Cameras", link: "/sport_cameras" },
    { name: "Instant Cameras", link: "/instant_cameras" },
    { name: "Drones with Camera", link: "/droneCamera" },
    { name: "Nikon", link: "/nikon" },
  ];

  const audio = [
    { name: " Home Theatre Systems", link: "/home_theartres" },
    { name: "Receivers & Amplifiers", link: "/receivers_amplifiers" },
    { name: "Sound Bars", link: "/sound_bars" },
    { name: "LG Home Theater System", link: "/lg_home_theartres" },
    { name: "Hisense Sound Bar", link: "/hisense_sounds" },
    { name: "Bluetooth Speakers", link: "/blueetooth_speakers" },
    { name: "Subwoofers", link: "/subwoofers" },
    { name: "LG", link: "/lg" },
    { name: "JBL", link: "/jbl" },
  ];

  const Generators = [
    { name: "Generators", link: "/generators" },
    { name: "Power Inverters", link: "/power_Inverters" },
    { name: "Solar & Wind Power", link: "/solar_wind_power" },
    { name: "Stablizers", link: "/stablizers" },
    { name: "Batteries", link: "/battries" },
    { name: "Lithium Battery ", link: "/lithium_battery" },
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
        <MdLiveTv className="text-xl" />
        <Link href="#">
          <span>Electronics</span>
        </Link>
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
                      Television & video
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
                    {tv.map((item) => (
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
                      camera & photos
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
                    {camera.map((item) => (
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
                      Home Audio
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
                    {audio.map((item) => (
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
                      Generators & Portable Powers
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
                    {Generators.map((item) => (
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
