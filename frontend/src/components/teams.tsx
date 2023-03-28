import { useEffect, useState } from "react";
import { AllTeams } from "../services/teamService";
import { TeamSchema } from "../types";
export const Team = () => {

    const [teams, setTeams] = useState<TeamSchema[]>([]);

    useEffect(() => {
    async function fetchData(){
        const data = await AllTeams();
        setTeams(data); 
    }
    fetchData();
    }, []);
    console.log(teams);

    return(
        <div>
        {teams.map(team => (
            <div key={team.id}>
                <p>Name: {team.name}</p>
            </div>
        ))}
        </div>   
    )
}