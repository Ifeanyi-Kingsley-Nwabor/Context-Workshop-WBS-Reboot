import { useContext } from "react";
import UserContext from "./context/UserContext";

const LogoutSibling = () => {
  const { setUserData } = useContext(UserContext);
  return <button onClick={() => setUserData()}>Logout!</button>;
};

export default LogoutSibling;
