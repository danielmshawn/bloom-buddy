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
      { user ?
        <>
          <Link style ={{color: "#FCF6F5FF" }}to="/mygarden">My Garden</Link>
          &nbsp; | &nbsp;
          <Link style ={{color: "#FCF6F5FF" }} to="/orders/new">New Order</Link>
          &nbsp;&nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;<Link style ={{color: "black" }} to="" onClick={handleLogOut}>Log Out</Link>
        </>
      :
        <>
          <Link to="">Home</Link>
          &nbsp; | &nbsp;
          <Link to="/auth">Log In/Sign Up</Link>
        </>
}
    </nav>
      
  );
}