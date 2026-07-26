import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login, user } = useAuth();
console.log(login)
  function handleLogin() {
    login({
      id: 1,
      name: "Suleiman",
      role: "admin",
    });
  }

  return (
    <>
        <button onClick={handleLogin}>
        Login
        </button>
    </>
  );
}

export default Login;