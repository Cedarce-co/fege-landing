"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toaster() {
  return (
    <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={4200}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable={false}
      toastStyle={{
        background: "#07141c",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        borderRadius: "1rem",
        fontFamily: "inherit",
      }}
    />
  );
}
