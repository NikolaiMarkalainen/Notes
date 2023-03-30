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
            <h1>Teams</h1>
        {teams.teams.map(team => (
            <div key={team.id}>
                <p>Name: {team.name}</p>
            </div>
        ))}
        <button onClick={() => setPage( page - 1)} disabled={isFetching || page <= 1 }> Back </button>
        <button onClick={() => setPage( page + 1)} disabled={isFetching || page === maxPages }> Next </button>
        </div>   
    )
}