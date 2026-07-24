import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate();
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div style={{ padding: 10, display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    );
}
export default Login