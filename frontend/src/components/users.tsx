import { useAppSelector } from "../hooks";
export const User = () => {
    
    const users = useAppSelector(state => state.users.users);
    console.log(users);
    return(
        <div>
            <h1>Users</h1>
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