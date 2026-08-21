import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex justify-center flex-col">
        <div className="bg-white w-80 text-center h-max p-2 px-4 rounded-lg">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder={"John"}
            label={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            placeholder={"Doe"}
            label={"Last Name"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            placeholder={"example@gmail.com"}
            label={"Email"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            placeholder={"******"}
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button label={"Sign up"} onClick={async () => {
              const response = await axios.post("http://localhost:3000/api/v1/users/signup", {
                username,
                firstName,
                lastName,
                password
              });
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
              // to remove token
              // localStorage.setItem("token", "")
              // localStorage.removeItem("token")
              // localStorage.clear("token")
            }} />
          </div>
          <ButtonWarning
            label={"Already have an account?"}
            ButtonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
