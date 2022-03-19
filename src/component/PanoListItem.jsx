import React from "react";

const PanoListItem = ({ content }) => {
  return (
    <div
      onClick={() => {
        alert(content);
      }}
    >
      {content}
    </div>
  );
};

export default PanoListItem;
