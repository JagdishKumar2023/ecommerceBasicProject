import React from "react";
import "./Caurasal.css";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icon/bs";

const Caurasal = ({ data }) => {
  return (
    <div className="carousel">
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} key={idx} className="silde" />
        );
      })}
    </div>
  );
};

export default Caurasal;
