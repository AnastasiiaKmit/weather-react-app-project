import React from "react";

export default function ConvertedUnits(props) {
  return (
    <div className="float-left">
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units">°C</span>
    </div>
  );
}
