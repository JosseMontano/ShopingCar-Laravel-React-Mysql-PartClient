import React from "react";
import "./Alert.scss";
const AlertWarning = () => {
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <div className="alert error">
        <input type="checkbox" id="alert1" />
        <label className="close" title="close" htmlFor="alert1">
          <i className="icon-remove"></i>
        </label>
        <p className="inner">
          <strong>Warning!</strong> The alerts are too damn awesome!
        </p>
      </div>
    </div>
  );
};
const AlertGood = () => {
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <div className="alert success">
      <input type="checkbox" id="alert2" />
      <label className="close" title="close" htmlFor="alert2">
        <i className="icon-remove"></i>
      </label>
      <p className="inner">La operacion se realizo de Forma exitosa.</p>
    </div>
    </div>
  );
};

const AlertMoreOrLess = () => {
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <div className="alert warning">
        <input type="checkbox" id="alert4" />
        <label className="close" title="close" htmlFor="alert4">
          <i className="icon-remove"></i>
        </label>
        <p className="inner">Warnings should be orange correct?</p>
      </div>
    </div>
  );
};

export { AlertWarning, AlertGood, AlertMoreOrLess };
