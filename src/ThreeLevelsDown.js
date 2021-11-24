import React, { useContext } from "react";
import UserContext from "./context/UserContext";
import { useThemeContext } from "./context/ThemeContext.js";

const ThreeLevelsDown = () => {
  const { userData: user } = useContext(UserContext);
  const { theme } = useThemeContext();

  const emoji = theme === "light" ? "🤷" : "🧛";
  return (
    <div>
      <p>Three Levels Down! ⬇️</p>

      {user ? (
        <>
          <h3>
            {emoji} Welcome back {user.username} {emoji}
          </h3>
          <h4>Your email is {user.email}</h4>
          <p>Admin status: {user.isAdmin ? "true" : "false"}</p>
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
