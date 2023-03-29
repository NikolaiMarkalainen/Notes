import { useAppSelector } from "../hooks";
export const Team = () => {

    const teams = useAppSelector(state => state.teams.teams);
    console.log(teams);
    return(
        <div>
            <h1>Teams</h1>
        {teams.map(team => (
            <div key={team.id}>
                <p>Name: {team.name}</p>
            </div>
        ))}
        </div>   
    )
}