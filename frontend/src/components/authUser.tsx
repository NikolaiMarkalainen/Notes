import { useAppSelector } from "../hooks"
import { Link } from "react-router-dom";

export const AuthenticatedLink = () => {
    const loggedUser = useAppSelector(state => state.login);

    if(loggedUser.isLogged){
        return(
          <Link className='link-dark' to ="logout">Logout</Link>
        )
      } else {
        return (
          <Link className='link-dark' to="/login">Login</Link>
          )
    }
}

