import React from "react";

const DeliveryEstimate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  const endDate = new Date(today);

  tomorrow.setDate(today.getDate() + 1);
  endDate.setDate(today.getDate() + 4);

  const format = (d, opt) => d.toLocaleDateString("en-GB", opt);

  return (
    <p>
      Tomorrow, {format(tomorrow, { day: "2-digit", month: "2-digit" })} –{" "}
      {format(endDate, { weekday: "short" })},{" "}
      {format(endDate, { day: "2-digit", month: "2-digit" })}
    </p>
  );
};

export default DeliveryEstimate;
