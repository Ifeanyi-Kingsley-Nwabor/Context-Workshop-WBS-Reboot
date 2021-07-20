import React, { useContext } from "react";
import UserContext from "./context/UserContext";
import { useThemeContext } from "./context/ThemeContext";

const ThreeLevelsDown = () => {
  const { userData } = useContext(UserContext);
  const { theme } = useThemeContext();

  const emoji = theme === "light" ? "🤷" : "🧛";

  return (
    <div>
      <p>Three Levels Down! ⬇️</p>

      {userData ? (
        <>
          <h3>
            {emoji} Welcome back {userData.username} {emoji}
          </h3>
          <p>Your email is {userData.email}</p>
          <p>Admin status: {userData.isAdmin ? "true" : "false"}</p>
        </>
      ) : (
        <h3>
          {emoji} User info should be here! {emoji}
        </h3>
      )}
    </div>
  );
};

export default ThreeLevelsDown;
