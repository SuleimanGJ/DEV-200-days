import { useState } from "react";
import { Button } from "./Button"

export const Users = () => {
    const [users, setUsers] = useState([{
        firstName: "Suleiman",
        lastName: "Osman",
        _id: 1
    }]);


  return (
    <>
        <div className="text-lg font-bold mt-6">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-1 py-2 rounded border border-slate-200" />
        </div>
        <div>
            {users.map((user) => <User user={user} />)}
        </div>
    </>
  );
};

const User = ({user}) => {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="bg-slate-200 h-12 w-12 rounded-full flex justify-center mr-2 mt-1">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button label={"Send Money"} />
            </div>
        </div>
    )
}
