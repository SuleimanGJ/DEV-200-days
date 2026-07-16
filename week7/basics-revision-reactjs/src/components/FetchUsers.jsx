import { useEffect, useState } from "react";


export default function FetchUsers(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchAllUsers(){
        try {
            setLoading(true);
            const response = await fetch(
              "https://dummyjson.com/users?limit=5&skip=10&select=firstName,age,email",
            );
            const data = await response.json();
            setUsers(data.users)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])

    

    return (
      <div>
        <h1>User Lists</h1>
        {loading ? <h2>Loading....</h2> :
        users.map((u) => {
          return (
            <div key={u.id}>
              <h3>First Name: {u.firstName}</h3>
              <h3>Age: {u.age}</h3>
              <h3>Email: {u.email}</h3>
            </div>
          );
        })}
      </div>
    );
}