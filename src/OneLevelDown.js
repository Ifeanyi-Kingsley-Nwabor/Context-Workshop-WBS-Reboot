import React from "react";
import TwoLevelsDown from "./TwoLevelsDown";

const OneLevelDown = () => {
  return (
    <div>
      <p>One Level Down! ⬇️</p>
      <TwoLevelsDown />
    </div>
  );
};

export default OneLevelDown;
