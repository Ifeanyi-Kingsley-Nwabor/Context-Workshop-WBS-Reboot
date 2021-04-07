import React, { useState } from "react";
import OneLevelDown from "./OneLevelDown";
import UserContext from "./contexts/UserContext"

const App = () => {

  const [ userData, setUserData ] = useState({
    username: "Ben",
    email: "ben@wbs.com",
    isAdmin: true
  })

  return (
    <>
      <h1>Context Workshop</h1>
      <UserContext.Provider value={{userData, setUserData}}>
        <OneLevelDown />
      </UserContext.Provider>
    </>
  );
};

export default App;
