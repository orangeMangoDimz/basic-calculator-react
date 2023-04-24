import React from "react";
import "../../Css/style.css";

const Button = ({ val, e, operator = false, colSize }) => {
  return (
    <>
      <button
        onClick={() => e(val)}
        className={`btn col-${colSize} fw-normal fs-3 ${
          operator ? "btn-warning" : "btn-light"
        }`}
      >
        {val}
      </button>
    </>
  );
};

export default Button;
