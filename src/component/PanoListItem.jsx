import React from "react";

const PanoListItem = ({ index, infospot, setCurrentInfospotIndex }) => {
  return (
    <div
      onClick={() => {
        setCurrentInfospotIndex(index);
        infospot.focus(1000, function (k) {
          return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        });
        console.log(infospot);
        console.log(infospot.element.innerText);
      }}
    >
      {infospot.element.innerText}
    </div>
  );
};

export default PanoListItem;
