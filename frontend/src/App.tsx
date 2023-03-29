
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { Route, Routes,Link } from 'react-router-dom';
import {Team, User,Note, Home} from "./components"
import { fetchUsers, AppDispatch, fetchNotes, fetchTeams } from './state';
const App = () => {
  
  const dispatch: AppDispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchNotes());
    dispatch(fetchTeams());
  }, [dispatch]);



  
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/notes">Notes</Link>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/users" element={<User/>}></Route>
        <Route path="/teams" element={<Team/>}></Route>
        <Route path="/notes" element={<Note/>}></Route>
      </Routes>
    </div>
  )

}


/*

 {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Admin: {user.admin.toString()}</p>
          </div>
      ))}
*/

export default App
