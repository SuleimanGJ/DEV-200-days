

import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Profile() {
  const user = useContext(UserContext);

  return <h1>{user.name}</h1>;
}