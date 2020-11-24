import React from "react";
import OneLevelDown from './OneLevelDown';

const App = () => {
  const loggedInUser = {
    username: "Ben",
    email: "ben@wbs.com",
    isAdmin: true,
  };

  return (
    <>
  <h1>
  Context Workshop
  </h1>
  <OneLevelDown/>
  </>
  );
}

export default App;
