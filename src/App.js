import React, { useState } from "react";
import OneLevelDown from "./OneLevelDown";
import UserContext from "./context/UserContext";
import LogoutSibling from "./LogoutSibling";
import { useThemeContext } from "./context/ThemeContext.js";

const App = () => {
  const [userData, setUserData] = useState();
  const { theme, setTheme } = useThemeContext();

  // const loggedInUser = {
  //   username: "Ben",
  //   email: "ben@wbs",
  //   isAdmin: true,
  // };

  const login = () => {
    setUserData({
      username: "Ben",
      email: "ben@wbs",
      isAdmin: true,
    });
  };

  const handleChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div
      style={
        theme === "dark"
          ? {
              color: "white",
              backgroundColor: "black",
            }
          : {}
      }
    >
      <h1>Context Workshop</h1>
      <label>
        <input
          type="checkbox"
          value="light"
          checked={theme === "light"}
          onChange={handleChangeTheme}
        />
        Light
      </label>
      <label>
        <input
          type="checkbox"
          value="dark"
          checked={theme === "dark"}
          onChange={handleChangeTheme}
        />
        Dark
      </label>
      <UserContext.Provider value={{ userData, setUserData }}>
        <OneLevelDown />
        <button onClick={login}>Login</button>
        <LogoutSibling />
      </UserContext.Provider>
    </div>
  );
};

export default App;
