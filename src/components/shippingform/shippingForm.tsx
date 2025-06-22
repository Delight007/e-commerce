"use client";
import React from "react";
import { useFormik } from "formik";
import { useShipping } from "./shippingContext";
import { useRouter } from "next/navigation";
import LocationSelect from "./selectStateCity";
import { useProductDetailsContext } from "../productDetails/components/context";

// Sample Nigerian states and cities — update as needed

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  deliveryMethod: "Pick Up" | "Delivery";
  state: string;
  city: string;
};

const validate = (values: FormValues) => {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^\d{11}$/.test(values.phone)) {
    errors.phone = "Phone number must be exactly 11 digits";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.deliveryMethod) {
    errors.deliveryMethod = "Required";
  }

  if (values.deliveryMethod === "Delivery" && !values.address) {
    errors.address = "Address required for delivery";
  }

  if (!values.state) {
    errors.state = "Required";
  }

  if (!values.city) {
    errors.city = "Required";
  }

  return errors;
};

export const ShippingForm = () => {
  const router = useRouter();
  const { setShippingInfo } = useShipping();
  const { setSelectedCity, setSelectedState } = useProductDetailsContext();

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      deliveryMethod: "Pick Up",
      state: "Lagos",
      city: "Ikeja",
    },
    validate,
    onSubmit: (values) => {
      console.log("Shipping Info Submitted:", values);
      setShippingInfo(values);
      router.push("/checkout");
    },
  });

  return (
    <div className="flex my-6 mx-10">
      <div className="bg-red-500 w-[350px] rounded-s-md mb-8"></div>
      <div className="bg-white w-[872px] rounded-e-md mb-8">
        <h1 className="px-4 py-2 font-bold border-b">Customer Address</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col p-4">
          {/* First & Last Name */}
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="firstName"
                className="font-semibold text-gray-500"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                autoCapitalize="words"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="border p-2 rounded-md focus:outline-red-500"
              />
              {formik.errors.firstName && (
                <div className="text-[12px] text-red-500">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="lastName" className="font-semibold text-gray-500">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                autoCapitalize="words"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="border p-2 rounded-md focus:outline-red-500"
              />
              {formik.errors.lastName && (
                <div className="text-[12px] text-red-500">
                  {formik.errors.lastName}
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col mt-3">
            <label htmlFor="email" className="font-semibold text-gray-500">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border p-2 rounded-md focus:outline-red-500"
            />
            {formik.errors.email && (
              <div className="text-[12px] text-red-500">
                {formik.errors.email}
              </div>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col mt-3">
            <label htmlFor="phone" className="font-semibold text-gray-500">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="border p-2 rounded-md focus:outline-red-500"
            />
            {formik.errors.phone && (
              <div className="text-[12px] text-red-500">
                {formik.errors.phone}
              </div>
            )}
          </div>

          {/* Address */}
          {formik.values.deliveryMethod === "Delivery" && (
            <div className="flex flex-col mt-3">
              <label htmlFor="address" className="font-semibold text-gray-500">
                Delivery Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className="border p-2 rounded-md focus:outline-red-500"
              />
              {formik.errors.address && (
                <div className="text-[12px] text-red-500">
                  {formik.errors.address}
                </div>
              )}
            </div>
          )}

          {/* State & City */}
          <div>
            <LocationSelect
              state={formik.values.state}
              city={formik.values.city}
              errors={{
                state: formik.touched.state ? formik.errors.state : undefined,
                city: formik.touched.city ? formik.errors.city : undefined,
              }}
              onStateChange={(newState) => {
                formik.setFieldValue("state", newState);
                formik.setFieldValue("city", ""); // reset city to empty when state changes
                setSelectedState(newState);
              }}
              onCityChange={(newCity) => {
                formik.setFieldValue("city", newCity);
                setSelectedCity(newCity);
              }}
            />
          </div>

          {/* Delivery Method */}
          <div className="flex flex-col mt-4">
            <label className="font-semibold">Delivery Method</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-1 text-gray-500 font-medium">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="Pick Up"
                  className="accent-red-500"
                  onChange={formik.handleChange}
                  checked={formik.values.deliveryMethod === "Pick Up"}
                />
                Pick Up Station
              </label>
              <label className="flex items-center gap-1 text-gray-500 font-medium">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="Delivery"
                  className="accent-red-500"
                  onChange={formik.handleChange}
                  checked={formik.values.deliveryMethod === "Delivery"}
                />
                Doorstep Delivery
              </label>
            </div>
            {formik.errors.deliveryMethod && (
              <div className="text-[12px] text-red-500">
                {formik.errors.deliveryMethod}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-500 p-2 rounded-md text-white font-semibold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
