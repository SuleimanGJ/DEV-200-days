import { useState } from "react";
import "./CreateForm.css"
import TableList from "./TableList";

function CreateForm() {
  const [petItems, setPetItems] = useState([]);
  const [values, setValues] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });
  const [showTable, setShowTable] = useState(false);

    const { petName, petType, breed, adopterName, email, phone } = values;

    console.log(petName, petType, breed, adopterName, email, phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name from handlechange fn",name)
    console.log("value from handlechange fn", value);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
     const newPet = {
       petName,
       petType,
       breed,
       adopterName,
       email,
       phone,
     };

     setPetItems((prevItems) => [...prevItems, newPet]);
     setShowTable(true);
    setValues({
      petName: "",
      petType: "Dog",
      breed: "",
      adopterName: "",
      email: "",
      phone: "",
    });
  };

  const handleGoBack = () => setShowTable(!showTable);

  if(showTable){
    return (
      <div id="form">
        <form id="create-form">
          <label htmlFor="pet-name">Pet Name</label>
          <input
            type="text"
            id="pet-name"
            name="petName"
            placeholder="Pet Name"
            value={petName}
            onChange={handleChange}
          />
          <label htmlFor="pet-type">Pet Type</label>
          <select
            id="pet-type"
            name="petType"
            value={petType}
            onChange={handleChange}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
          </select>
          <label htmlFor="pet-breed">Breed</label>
          <input
            type="text"
            id="pet-breed"
            name="breed"
            placeholder="Breed"
            value={breed}
            onChange={handleChange}
          />
          <label htmlFor="user-name">Adopter Name</label>
          <input
            type="text"
            id="adopter-name"
            name="adopterName"
            placeholder="adopter Name"
            value={adopterName}
            onChange={handleChange}
          />
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="user-email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="user-phone">Phone</label>
          <input
            type="tel"
            id="user-phone"
            name="phone"
            placeholder="Your Phone"
            value={phone}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit} id="submit-btn">
            Submit
          </button>
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
