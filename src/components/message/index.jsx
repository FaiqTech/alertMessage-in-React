// AlertMessage.jsx

import React from "react";
import "./AlertMessage.css";

const AlertMessage = ({ message, type }) => (
  <div className={type}>{message}</div>
);

export default AlertMessage;
