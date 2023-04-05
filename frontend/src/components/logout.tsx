import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {clearLoggedState, useLogoutUserMutation, setMessage } from "../state"
import { LoggedState } from "../types";

export const Logout = () => {
    const [user, {}] = useLogoutUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userLogData = useAppSelector(state => state.login)
    
    const handleLogOut = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: LoggedState) => {
        try{
            event.preventDefault();
            const response = await user(data).unwrap();
            dispatch(setMessage(response.message));
            dispatch(clearLoggedState());
            setTimeout(() => {
                navigate('/');
            }, 2000)
        } catch (error:any) {
        const err = error; 
        if(err.data){
            dispatch(setMessage(err.data.message));
        } else {
            dispatch(setMessage(err.message));
        }
        }
    }
    return(
        <div>
            <h1>
                Welcome <span> {userLogData.user?.username} </span>
                <button onClick={(event) => handleLogOut(event, userLogData)}> Logout </button>
            </h1>
        </div>
    )
}