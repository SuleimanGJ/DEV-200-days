import { useState } from "react";
import "./CreateForm.css"
import TableList from "./TableList";

function CreateForm() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
const [petItems, setPetItems] = useState([]);
const [showTable, setShowTable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPetItems([
    //   ...petItems,
    //   {
    //     petName,
    //     petType,
    //     breed,
    //     name,
    //     email,
    //     phone,
    //   },
    // ]);
     const newPet = {
       petName,
       petType,
       breed,
       name,
       email,
       phone,
     };

     setPetItems((prevItems) => [...prevItems, newPet]);
     setShowTable(true);
     setPetName("")
     setPetType("")
     setBreed("")
     setName("")
     setEmail("")
     setPhone("")
  };

  const handleGoBack = () => setShowTable(!showTable);

  if(showTable){
    return (
      <div id="form">
        <form id="create-form" onSubmit={handleSubmit}>
          <label htmlFor="pet-name">Pet Name</label>
          <input
            type="text"
            id="pet-name"
            placeholder="Pet Name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <label htmlFor="pet-type">Pet Type</label>
          <select
            id="pet-type"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <label htmlFor="pet-breed">Breed</label>
          <input
            type="text"
            id="pet-breed"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <label htmlFor="user-name">Name</label>
          <input
            type="text"
            id="user-name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="user-email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="user-phone">Phone</label>
          <input
            type="tel"
            id="user-phone"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button id="submit-btn">Submit</button>
        </form>
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
            Show Table
          </button>
        </div>
      </div>
    );
  }
  return <TableList petItems={petItems} handleGoBack={handleGoBack} />
}


export default CreateForm;
