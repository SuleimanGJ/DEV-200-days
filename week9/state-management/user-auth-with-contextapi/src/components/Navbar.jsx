import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <p>User: {user.name}</p>
          <p>Role: {user.role}</p>
          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </nav>
  );
}

export default Navbar;