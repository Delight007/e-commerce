"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { FaRegHeart } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    offPercent: string;
    prevPrice: number;
    specifications?: {
      // Ensure this matches the API structure
      Model?: string;
      [key: string]: any; // Allow other possible fields
    };
  };
}

const Transition = React.forwardRef(function Transition(
  props: React.ComponentProps<typeof Slide>, // Ensure correct props type
  ref: React.Ref<unknown>
) {
  return <Slide ref={ref} {...props} />;
});

const AddWhishList: React.FC<ProductProps> = ({ product }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>
        <FaRegHeart />
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ fontWeight: "600", fontSize: "18px" }}>
          {"Please select a variation"}
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
        </DialogTitle>
        <DialogContent>
          <div id="alert-dialog-slide-description">
            <div className="text-red-500 border-red-500 w-[200px] h-[40px] border my-3 flex justify-center items-center">
              Model: {product.specifications?.Model ?? "N/A"}
            </div>

            <div>
              <span className="font-semibold text-black text-xl mt-3">
                ₦ {product.price.toLocaleString()}
              </span>
              <span className=" flex text-[12px] w-full h-5 mt-2">
                {product.prevPrice > 0 && (
                  <span className="line-through text-gray-500 ">
                    {product.prevPrice.toLocaleString()}
                  </span>
                )}
                {Number(product.offPercent) < 0 && (
                  <span className="ml-2 bg-slate-100 p-1 flex justify-center items-center text-red-500">
                    {product.offPercent} %
                  </span>
                )}
              </span>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="w-[700px] relative  h-[40px] bg-red-500 font-semibold text-white text-[14px]"
          >
            <FaRegHeart className="absolute left-2 text-lg font-bold" />
            Add to whishlist
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default AddWhishList;
