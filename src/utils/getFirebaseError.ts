// const getFirebaseError = (code?: string) => {
//   switch (code) {
//     case "auth/invalid-email":
//       return { field: "email", message: "Invalid email address" };

//     case "auth/invalid-credential":
//       return {
//         field: "password",
//         message: "Invalid email or password",
//       };

//     case "auth/user-disabled":
//       return { field: "email", message: "Account disabled" };

//     default:
//       return { field: "form", message: "Login failed. Try again" };
//   }
// };

// export default getFirebaseError;

type AuthErrorField = "email" | "password" | "form";

type AuthError = {
  field: AuthErrorField;
  message: string;
};

const getFirebaseError = (code?: string): AuthError => {
  switch (code) {
    case "auth/invalid-email":
      return { field: "email", message: "Invalid email address" };

    case "auth/invalid-credential":
      return {
        field: "password",
        message: "Invalid email or password",
      };

    case "auth/user-disabled":
      return { field: "email", message: "This account has been disabled" };

    default:
      return { field: "form", message: "Login failed. Try again" };
  }
};
export default getFirebaseError;
