import React from "react";
import "./Toast.css";

const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      <div className="toast">{message}</div>
    </div>
  );
};

export default Toast;
