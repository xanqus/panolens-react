import React, { useState } from "react";
import TWEEN, * as PANOLENS from "../../node_modules/panolens/build/panolens";

const PanoEditor = ({ panorama, viewer }) => {
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

    panorama.add(infospot);

    infospot.focus(1000, function (k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    });

    console.log(infospot);
  };
  return (
    <div
      id="test"
      style={{ width: "600px", height: "200px", border: "1px solid black" }}
    >
      <button
        onClick={() => {
          panorama.addEventListener("click", addTag);
        }}
      >
        tag 생성 활성화
      </button>
      <button
        onClick={() => {
          panorama.removeEventListener("click", addTag);
        }}
      >
        tag 생성 비활성화
      </button>
      <button
        onClick={() => {
          console.log(focus);
          focus.focus(1000, function (k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
          });
        }}
      >
        focus test
      </button>
    </div>
  );
};

export default PanoEditor;
