import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link";

export default function HoverPopoverOther() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const toy = [
    { name: "Games", link: "/games" },
    { name: "Dress Up & Pretend Play", link: "/dress-up-pretend-play" },
    { name: "Sports & Outdoor Play", link: "/sports" },
    { name: "Top Toys & Games", link: "toys" },
  ];

  const automobile = [
    { name: " Car Care", link: "/car_care" },
    { name: "Car Electronics & Accessories", link: "/car_tech" },
    { name: "Lights & Lighting Accessories", link: "/lights" },
    { name: "Exterior Accessories", link: "/exterior" },
    { name: "Oils & Fluids", link: "/fluids" },
    { name: "Interior Accessories", link: "/interior" },
    { name: "Tyre & Rims", link: "/tyre" },
  ];

  const sport = [
    { name: "Cardio Training", link: "/cardio_training" },
    { name: "Strength Training Equipment", link: "/strength_training" },
    { name: "Accessories", link: "/accessories" },
    { name: "Team Sports", link: "/team_sports" },
    { name: "Outdoor & Adventure", link: "/outdoor_Adventure" },
  ];

  const store = [
    { name: "Adidas", link: "/adidas" },
    { name: "Nestle", link: "/nestle" },
    { name: "Xiaomi", link: "/xiaomi" },
    { name: "Nivea", link: "/nivea" },
    { name: "Apple", link: "/apple" },
    { name: "Intel", link: "/intel" },
    { name: "Reckitt Benckiser", link: "/reckitt-benckiser" },
    { name: "Binatone", link: "/binatone" },
    { name: "Nexus", link: "/nexus" },
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
        <CgMoreO className="text-xl" />
        <Link href="#">
          <span>Other Products</span>
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
            <div className="grid grid-cols-3 gap-2">
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
                      Toys and Games
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
                    {toy.map((item) => (
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
                      Automobile
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
                    {automobile.map((item) => (
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
                      Sporting Goods
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
                    {sport.map((item) => (
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
                        fontSize: "12px",
                        paddingBottom: "16px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Books, Movies and Music
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",

                        fontSize: "12px",
                        paddingBottom: "16px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Pet Supplies
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",

                        fontSize: "12px",
                        paddingBottom: "16px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Wholesale
                    </Typography>
                  </Link>
                  <Link href="#">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",

                        fontSize: "12px",
                        paddingBottom: "16px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Gana Global
                    </Typography>
                  </Link>
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
                      Official Store
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
                    {store.map((item) => (
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
