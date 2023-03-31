import { Route, Routes,Link } from 'react-router-dom';
import {Team, User,Note, Home, Login, Logout, Notification} from "./components"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { useAppSelector } from './hooks';
import { useState } from 'react';



const App = () => {

  return (
    <div className='background-body'>
      <Notification />
      <div className='Link-parent'>
        <Link className='link-dark'to="/">Home</Link>
        <Link className='link-dark'to="/users">Users</Link>
        <Link className='link-dark'to="/teams">Teams</Link>
        <Link className='link-dark'to="/notes">Notes</Link>
        <Link className='link-dark' to="/login">Login</Link>
        <Link className='link-dark' to ="logout">Logout</Link>
      </div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/users" element={<User/>}></Route>
        <Route path="/teams" element={<Team/>}></Route>
        <Route path="/notes" element={<Note/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>

      </Routes>
    </div>
  )
}
export default App
