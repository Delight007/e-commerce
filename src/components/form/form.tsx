import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login values:", values);
      // handle login logic here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-sm mx-auto">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border p-2 w-full"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="border p-2 w-full"
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
