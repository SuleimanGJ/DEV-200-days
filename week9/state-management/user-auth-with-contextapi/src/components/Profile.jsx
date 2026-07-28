import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login, user } = useAuth();
  const [username, setUsername] = useState("")
  const [role, setRole] = useState("")
let genId = 0;
  function handleLogin(e) {
    e.preventDefault();
    login({
      id: genId++,
      name: username,
      role: role,
    });
    setUsername("")
  }

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "450px" }}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="role">Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </form>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;