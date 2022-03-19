import React from "react";
import PanoListItem from "./PanoListItem";

const PanoList = () => {
  const test = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ width: "200px", height: "auto", border: "1px solid blue" }}>
      {test.map((element, index) => {
        return <PanoListItem key={index} content={test[index]} />;
      })}
    </div>
  );
};

export default PanoList;
