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
        <h1 className="description" >Users</h1>
        <div className="card-container">
            {users.users.map(user => (
            <div className="card" key={user.id}>
            <h5 className="card-title"> {user.name}</h5>
            <h6 className="card-subtitle">{user.username}</h6>
            <p className="card-text">Admin: {user.admin.toString()}</p>
            </div>
        ))}
        <div className="button-container">
        <button className="btn btn-primary" onClick={() => setPage( page - 1)} disabled={isFetching || page <= 1 }> Back </button>
        <button className="btn btn-primary" onClick={() => setPage( page + 1)} disabled={isFetching || page === maxPages }> Next </button>
        </div>
        </div>
        </div>   
    )
}