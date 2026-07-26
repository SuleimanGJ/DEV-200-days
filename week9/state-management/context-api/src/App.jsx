// import Dashboard from "./components/Dashboard"

// function App() {
//   const user = { name: "Suleiman" };
//   return <Dashboard user={user} />;
// }



export default App
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard"

function App() {
  const user = {
    name: "Abdi",
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}
