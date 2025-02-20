import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { GiLipstick } from "react-icons/gi";
import Link from "next/link";
import { link } from "fs";

export default function HoverPopoverHealth() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const makeUp = [
    {
      name: "Concealers & Color Correctors",
      link: "/concealers_color-correctors",
    },
    { name: "Foundation", link: "/foundation" },
    { name: "Powder", link: "powder" },
    { name: "Lipstick", link: "/lipstick" },
    { name: "Eyeliner & Kajal", link: "Eyeliner_Kajal" },
    { name: "Mascara", link: "/mascara" },
  ];
  const personalCare = [
    { name: "Skin Care", link: "Skin_Care" },
    {
      name: "Sunscreens & Tanning Products",
      link: "Sunscreens_tanning_products",
    },
    { name: "Contraceptives & Lubricants", link: "Contrace_lubricants" },
    { name: "Piercing & Tattoo Supplies", link: "Piercing_supplies" },
    {
      name: "Deodorants & Antiperspirants",
      link: "Deodorants_ antiPerspirants",
    },
    { name: "Lip Care", link: "Lip_care" },
  ];

  const fragrances = [
    { name: "Women's", link: "/women" },
    { name: "Men's", link: "/men" },
  ];
  const hairCare = [
    { name: " Hair Cutting Tools", link: "/hair-tools" },
    { name: "Shampoo & Conditioner", link: "/hair-and-conditioner" },
    { name: "Wigs & Accessories", link: "/wigs_accessories" },
  ];
  const oralCare = [
    { name: "Teeth Whitening", link: "/teeth_whitening" },
    { name: "Toothpaste", link: "/toothPaste" },
  ];

  const healthCare = [
    { name: "First Aid", link: "/first_aid" },
    { name: "Medical Supplies & Equipment", link: "/medical_supplies" },
    { name: "Alternative Medicine", link: "/alternative_medicines" },
    { name: "Feminine Care", link: "/feminine_Care" },
    { name: "Diabetes Care", link: "/diagnosis" },
  ];
  const vitamines = [
    { name: " Vitamins & Minerals", link: "vitamine_minerals" },
    { name: "Supplements", link: "/supplements" },
    { name: "Multi & Prenatal Vitamins", link: "multi_vitamine" },
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
        <GiLipstick className="text-xl" />
        <span>Health & Beauty</span>
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          mt: "-75px",
          ml: "-3px",
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
                      Make Up
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
                    {makeUp.map((item) => (
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
                      Personal Care
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
                    {personalCare.map((item) => (
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
                      Fragrances
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
                    {fragrances.map((item) => (
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
                      Hair Care
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
                    {hairCare.map((item) => (
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
                      Oral Care
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
                    {personalCare.map((item) => (
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
                      Health Care
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
                    {healthCare.map((item) => (
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
                      Vitamins & Dietary Supplements
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
                    {vitamines.map((item) => (
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
