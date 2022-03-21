import React, { useState } from "react";
import * as PANOLENS from "../../node_modules/panolens/build/panolens";

const PanoEditor = ({ panorama, viewer }) => {
  const [infospots, setInfospots] = useState();
  let focus;
  const addTag = () => {
    const coordinate = viewer.outputPosition();
    console.log(coordinate);
    const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(
      parseInt(coordinate[0]),
      parseInt(coordinate[1]),
      parseInt(coordinate[2])
    );
    // infospot.addHoverText(
    //   '중요 인적 사항'
    // );

    // const newDiv = document.createElement("div");
    // newDiv.style.cssText = "width:200px;height:300px;";
    // const newImg = document.createElement("img");
    // newImg.style.cssText = "width:100%;height:100%;";
    // newImg.src = "/assets/1.JPG";
    // newDiv.appendChild(newImg);
    // const testDiv = newDiv;
    // infospot.addHoverElement(testDiv, 200);

    // infospot.focus(1000, function (k) {
    //   return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    // });
    focus = infospot;
    panorama.add(infospot);
    setInfospots(infospot);
  };
  return (
    <div
      id="test"
      style={{ width: "600px", height: "200px", border: "1px solid black" }}
    >
      <button
        onClick={(e) => {
          panorama.addEventListener("click", function handler() {
            addTag();
            this.removeEventListener("click", handler);
          });
        }}
      >
        tag 생성
      </button>
      {/* <button
        onClick={() => {
          panorama.removeEventListener("click", () => {
            addTag();
          });
        }}
      >
        tag 생성 비활성화
      </button>
      <button
        onClick={() => {
          console.log(infospots);
          // console.log(focus);
          // focus.focus(1000, function (k) {
          //   return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
          // });
        }}
      >
        focus test
      </button> */}
    </div>
  );
};

export default PanoEditor;
