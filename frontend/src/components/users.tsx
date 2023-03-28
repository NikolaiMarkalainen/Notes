import { useEffect,useState } from "react";
import { UserSchema } from "../types";
import { AllUsers } from "../services/userService";

export const User = () => {
    const [users, setUsers] = useState<UserSchema[]>([]);

    useEffect(() => {
    async function fetchData(){
        const data = await AllUsers();
        setUsers(data); 
    }
    fetchData();
    }, []);
    console.log(users);
    return(
        <div>
        {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Admin: {user.admin.toString()}</p>
          </div>
      ))}
        </div>   
    )
}