
const imgStyle = {
    width: 100, background: "transparent",
}
export default function ProfileCard({ image, name, bio, description }) {
  return (
    <div
      style={{
        width: 450,
        background: "gray",
        borderRadius: 10,
        padding: 30,
        marginBottom: 10,
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
          src={image}
          alt=""
        />
        <div>
          <h3 style={{ marginBottom: 0 }}>{name}</h3>
          <small style={{ margin: 0 }}>{bio}</small>
          <p style={{ fontSize: 14 }}>{description} {" "}</p>
        </div>
      </div>
    </div>
  );
}