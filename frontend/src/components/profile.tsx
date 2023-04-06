import { useAppSelector } from "../hooks"
import { useGetAllTeamsQuery } from "../state";
import "../styles/profileStyles.css"
export const Profile = () => {

    const user = useAppSelector(state => state.login.user);
    const {data: teams}= useGetAllTeamsQuery();
    if(!teams){
        return(
            <div>No teams</div>
        )
    }
    console.log(teams);
    return (
    <div className="profile-page">
        <h1 className="">Your Personal Page</h1>
        <div>This is your page where you can edit your name, password and team</div>
        <form className="form-root">
            <div className="form-row">
            <div className="form-label">Username:</div>
            <div className="form-data">{user?.username &&
                 `${user.username.slice(0, 3)}*****@${user.username.split('@')[1]}`}
            </div>
            <div className="form-input">
                <input type="text" name="username" />
            </div>
            </div>
            <div className="form-row">
            <div className="form-label">Name:</div>
            <div className="form-data">{user?.name}</div>
            <div className="form-input">
                <input type="text" name="name" />
            </div>
            </div>
            <div className="form-row">
            <div className="form-label">Password:</div>
            <div className="form-data">********</div>
            <div className="form-input">
                <input type="password" name="password" />
            </div>
            </div>
            <div className="form-row">
            <div className="form-label">Team:</div>
            <div className="form-data">{user?.teamId}</div>
            <div className="form-input">
                <select name="team">
                {teams?.map(team => {
                    return(
                    <option value={team.id} key={team.id}>
                        {team.name}
                    </option>
                    )
                })}
                </select>
            </div>
            </div>
        <button className="btn btn-secondary button-color button-spacing" type="submit">Save Changes</button>
  </form>
</div>
    );
};