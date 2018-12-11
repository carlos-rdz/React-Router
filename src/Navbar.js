import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = (props) => {

    return (

        <nav className="navbar navbar-light bg-light">
          <Link to="/Horror"  className="navbar-brand"> Horror </Link>
          <Link to="/Sci-Fi"  className="navbar-brand"> Sci-Fi </Link>
          <Link to="/Action"  className="navbar-brand"> Action </Link>
          <Link to="/Drama"  className="navbar-brand"> Drama </Link>
        </nav>

    )
}


export default Navbar;

