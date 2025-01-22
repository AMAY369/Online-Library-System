import React from "react";

const Btn = ({ style, content, action }) => {
  return (
    <button className={style} onClick={action}>
      {content}
    </button>
  );
};

export default Btn;