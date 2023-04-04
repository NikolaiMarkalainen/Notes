import { useState } from "react"
import { useAppDispatch } from "../hooks";
import { setMessage, useLoginUserMutation } from "../state";
import { ErrorType, LoginParams } from "../types";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { data, error, isLoading, isError }] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>, data: LoginParams) => {
        event.preventDefault();
        try {
            const response = await loginUser(data).unwrap();
            const message = response.message;
            dispatch(setMessage(message));
            console.log(response);
        } catch (error:any) {
            const err = error; 
            dispatch(setMessage(err.data.message));
        }
    }
        return(
        <div>
            <form onSubmit={(e) => handleLogin(e, {username, password})}>
                <h1> Login Here </h1>
                <input type="username" 
                placeholder="Email" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}>
                </input>
                <input type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}