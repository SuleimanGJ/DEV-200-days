import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";


function Signup() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex justify-center flex-col">
        <div className="bg-white w-80 text-center h-max p-2 px-4 rounded-lg">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox placeholder={"John"} label={"First Name"} />
          <InputBox placeholder={"Doe"} label={"Last Name"} />
          <InputBox placeholder={"example@gmail.com"} label={"Email"} />
          <InputBox placeholder={"******"} label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign up"} />
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
