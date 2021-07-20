import React, { useState } from "react";
import OneLevelDown from "./OneLevelDown";
import UserContext from "./context/UserContext";
import LogoutSibling from "./LogoutSibling";
import { useThemeContext } from "./context/ThemeContext";

const App = () => {
  const [userData, setUserData] = useState();
  const { theme, setTheme } = useThemeContext();

  const handleSelectTheme = (e) => {
    setTheme(e.target.value);
  };

  const login = () => {
    setUserData({
      username: "Ben",
      email: "ben@wbs.com",
      isAdmin: true,
    });
  };

  return (
    <div
      style={
        theme === "dark" ? { color: "white", backgroundColor: "black" } : {}
      }
    >
      <h1>Context Workshop</h1>
      <label>
        <input
          type="radio"
          value="light"
          checked={theme === "light"}
          onChange={handleSelectTheme}
        />
        Light
      </label>
      <label>
        <input
          type="radio"
          value="dark"
          checked={theme === "dark"}
          onChange={handleSelectTheme}
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
