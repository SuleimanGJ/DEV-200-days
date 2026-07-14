
const imgStyle = {
    width: 100, background: "transparent",
}
export default function ProfileCard(){
    return (
      <div
        style={{
          width: 450,
          background: "gray",
          borderRadius: 10,
          padding: 30,
          marginBottom: 10
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 25 }}
        >
          <img
            style={{
              width: 150,
              height: 100,
              background: "transparent",
              borderRadius: 50,
              marginTop: 10,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZjSYv5j7yKO9TZBsDKeLBqZdl2Pd1vsDztOW_OdV8CGohgdwekFJGDBs&s=10"
            alt=""
          />
          <div >
            <h3 style={{ marginBottom: 0 }}>John Doe</h3>
            <small style={{ margin: 0 }}>Fullstack Developer</small>
            <p style={{ fontSize: 14 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus laboriosam itaque magnam {" "}
            </p>
          </div>
        </div>
      </div>
    );
}