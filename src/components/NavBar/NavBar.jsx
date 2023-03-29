import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/mygarden">My Garden</Link>
      &nbsp; | &nbsp;
      <Link to="/plants/new">Create A Plant</Link>
      &nbsp; | &nbsp;
      <Link to="/growing">What's Growing?</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
      
  );
}