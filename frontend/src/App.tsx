
import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';
import { Route, Routes,Link } from 'react-router-dom';
import {Team, User,Note, Home} from "./components"
import { fetchUsers, AppDispatch, fetchNotes, fetchTeams } from './state';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { getPaginatedUsers } from './services/userService';
import { UserPagination } from './types';
const App = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const [user, setUsers] = useState<UserPagination>();
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchNotes());
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    async function fetchData(){
      const data = await getPaginatedUsers(2);
      setUsers(data);
    }
    fetchData();
  }, []);

  console.log(user);
  
  return (
    <div className='background-body'>
      <div className='Link-parent'>
        <Link className='link-dark'to="/">Home</Link>
        <Link className='link-dark'to="/users">Users</Link>
        <Link className='link-dark'to="/teams">Teams</Link>
        <Link className='link-dark'to="/notes">Notes</Link>
      </div>
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
