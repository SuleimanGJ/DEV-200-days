import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();

  function handleLogin() {
    login({
      id: 1,
      name: "Khadar",
      role: "admin",
    });
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

export default Login;