import { useAppSelector } from "../../hooks";
export const User = () => {
    
    const users = useAppSelector(state => state.users.users);
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