

function TableList({ petItems, handleGoBack }) {
  return (
    <div>
      <table style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #a06e6e",
          fontSize: "18px",
          textAlign: "left",
          padding: "8px",
          backgroundColor: "#827979",
          color: "#333333",
          textTransform: "capitalize",
          fontFamily: "Arial, sans-serif",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <td>Pet Name</td>
            <td>Pet Type</td>
            <td>Breed</td>
            <td>Adopter Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {petItems.map((pet, index) => (
            <tr key={index}>
              <td>{pet.petName}</td>
              <td>{pet.petType}</td>
              <td>{pet.breed}</td>
              <td>{pet.name}</td>
              <td>{pet.email}</td>
              <td>{pet.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={handleGoBack}
          style={{
            padding: "10px 20px",
            boxSizing: "border-box",
            width: "auto",
            display: "inline-block",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default TableList;