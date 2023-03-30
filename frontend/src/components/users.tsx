import { useState } from "react";
import { useGetPaginatedUsersQuery } from "../state";

export const User = () => {
    const [page, setPage] = useState(1);
    const {data: users, isLoading, isFetching } = useGetPaginatedUsersQuery(page);

    if(!users){
        return(
            <div> Users not found </div>
        )
    }
    if(isLoading){
        return(
            <div> Loading .... </div>
        )
    }

    const maxPages = users.pages;
    return(
        <div>
            <h1>Users</h1>
            {users.users.map(user => (
            <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Admin: {user.admin.toString()}</p>
            </div>
        ))}
        <button onClick={() => setPage( page - 1)} disabled={isFetching || page <= 1 }> Back </button>
        <button onClick={() => setPage( page + 1)} disabled={isFetching || page === maxPages }> Next </button>
        </div>   
    )
}