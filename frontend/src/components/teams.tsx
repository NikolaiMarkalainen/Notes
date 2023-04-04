import { useState } from "react";
import { useGetPaginatedTeamsQuery } from "../state";

export const Team = () => {

    const [page, setPage] = useState(1);
    const {data: teams, isFetching, isLoading} = useGetPaginatedTeamsQuery(page);

    if(!teams){
        return(
            <div> No teams</div>
        )
    }
    if(isLoading){
        return(
            <div>Loading ...</div>
        )
    }
    const maxPages = teams.pages;
    return(
        <div>
        <h1 className="description">Teams</h1>
        <div className="card-container">
            {teams.teams.map(team => (
            <div className="card" key={team.id}>
                <h5 className="card-title">{team.name}</h5>
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