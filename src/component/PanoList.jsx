import React from "react";
import PanoListItem from "./PanoListItem";

const PanoList = ({ infospots, setCurrentInfospotIndex }) => {
  return (
    <div style={{ width: "200px", height: "auto", border: "1px solid blue" }}>
      {infospots.map((element, index) => {
        return (
          <PanoListItem
            key={index}
            index={index}
            infospot={infospots[index]}
            setCurrentInfospotIndex={setCurrentInfospotIndex}
          />
        );
      })}
      <button
        onClick={() => {
          console.log(infospots);
        }}
      >
        test
      </button>
    </div>
  );
};

export default PanoList;
