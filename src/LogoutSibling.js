import React, { useContext } from "react";
import UserContext from "./context/UserContext";

export default function LogoutSibling() {
  const { setUserData } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => setUserData()}>Logout</button>
    </div>
  );
}
