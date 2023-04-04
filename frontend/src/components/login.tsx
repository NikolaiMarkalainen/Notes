import { useState } from "react"
import { useAppDispatch } from "../hooks";
import { setMessage, useLoginUserMutation } from "../state";
import { ErrorType, LoginParams } from "../types";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { data, error, isLoading, isError }] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>, data: LoginParams) => {
        event.preventDefault();
        try {
            const response = await loginUser(data).unwrap();
            const message = response.message;
            dispatch(setMessage(message));
            setTimeout(() => {
                navigate('/');
            }, 2000)
        } catch (error:any) {
            const err = error; 
            dispatch(setMessage(err.data.message));
        }
    }
        return(
        <div className="card login-container">
            <div className="card-body login-card">
            <h1 className="card-title login-title"> Login </h1>
            <form onSubmit={(e) => handleLogin(e, {username, password})}>
            <div className="mb-3">
                    <input type="username" 
                    className="form-control"
                    placeholder="Email" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}>
                    </input>
            </div>
            <div className="mb-3">
                <input type="password"
                className="form-control" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}>
                </input>
            </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}