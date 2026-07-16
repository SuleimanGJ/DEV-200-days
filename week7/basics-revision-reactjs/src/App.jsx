import FetchUsers from "./components/FetchUsers";
import ProfileCard from "./components/ProfleCard"


function App() {

  return (
    <div>
      <div style={{ background: "darkblue", height: "100%", padding: 10 }}>
        <ProfileCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZjSYv5j7yKO9TZBsDKeLBqZdl2Pd1vsDztOW_OdV8CGohgdwekFJGDBs&s=10"
          name="John Doe"
          bio="Fullstack Developer" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus laboriosam itaque magnam"
        />
        <ProfileCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZjSYv5j7yKO9TZBsDKeLBqZdl2Pd1vsDztOW_OdV8CGohgdwekFJGDBs&s=10"
          name="Laray Micheal"
          bio="Frontend Developer" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus laboriosam itaque magnam"
        />
      </div>
      <FetchUsers />
    </div>
  );
}

export default App
