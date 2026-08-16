import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";


function Dashboard() {

  return (
    <div>
      <AppBar />
      <div className="m-8">
        <Balance value={1000} />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard