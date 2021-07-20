import React from "react";
import TwoLevelsDown from "./TwoLevelsDown";

const OneLevelDown = ({ user }) => {
  return (
    <div>
      <p>One Level Down! ⬇️</p>
      <TwoLevelsDown user={user} />
    </div>
  );
};

export default OneLevelDown;
