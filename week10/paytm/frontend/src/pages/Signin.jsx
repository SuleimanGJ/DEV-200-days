import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { useState } from "react";
import axios from "axios";

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(username)
    console.log(password)
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex justify-center flex-col">
        <div className="bg-white w-80 text-center h-max p-2 px-4 rounded-lg">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
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
            <Button
              label={"Sign in"}
              onClick={() => {
                axios.post("http://localhost:3000/api/v1/users/signin", {
                  username,
                  password,
                });
              }}
            />
          </div>
          <ButtonWarning
            label={"Don't have an account?"}
            ButtonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
