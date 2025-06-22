"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { RiInformationLine } from "react-icons/ri";
import { Box } from "@mui/material";
import { Fugaz_One } from "next/font/google";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function NoticeI() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        onClick={handleClickOpen}
        sx={{
          background: "none", // Remove background
          boxShadow: "none", // Remove shadow
          border: "none", // Remove border
          padding: 0, // Remove padding
          minWidth: "auto", // Remove default button width
          cursor: "pointer",

          "&:hover": {
            background: "none", // Prevent hover background
            color: "red",
          },
          "&:focus": {
            background: "none", // Remove background on focus (click)
          },
          "&:active": {
            background: "none", // Prevent background on click
          },
        }}
      >
        <RiInformationLine className="ml-28 text-lg font-extrabold " />
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          gap: "4px",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,

            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box sx={{}}>
            <h2 className={`text-lg font-bold py-5 `}>
              <span className={`${fugazOne.className}`}>gana</span>
              <span className={`${fugazOne.className} text-red-500  uppercase`}>
                Express
              </span>
            </h2>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
