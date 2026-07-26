import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <div>
          <p>Hello {user.name}</p>
          <button onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </nav>
  );
}

export default Navbar;