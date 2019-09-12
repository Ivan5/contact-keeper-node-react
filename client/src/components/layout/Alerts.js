import React, { useContext } from "react";
import ALertContext from "../../contacts/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(ALertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div kay={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
