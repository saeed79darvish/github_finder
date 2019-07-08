import React, { useContext } from "react";

import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div
        className={`alert alert-${alert.type}`}
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <i className="fas fa-info-circle">{alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
