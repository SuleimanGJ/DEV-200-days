


const Register = () => {
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
        <button>Register</button>
      </div>
    </div>
  );
};
export default Register;