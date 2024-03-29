import { Route, Routes,Link } from 'react-router-dom';
import {Team, User,Note, Home, Login, Logout, Notification, AuthenticatedLink, Profile } from "./components"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"

const App = () => {
  return (
    <div className='background-body'>
      <Notification />
      <div className='Link-parent'>
        <Link className='link-dark'to="/">Home</Link>
        <Link className='link-dark'to="/users">Users</Link>
        <Link className='link-dark'to="/teams">Teams</Link>
        <Link className='link-dark'to="/notes">Notes</Link>
        <AuthenticatedLink/>
      </div>  
      <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/users" element={<User/>}></Route>
        <Route path="/teams" element={<Team/>}></Route>
        <Route path="/notes" element={<Note/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      </>
    </div>
  )
}
export default App
