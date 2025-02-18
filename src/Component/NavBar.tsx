import { NavLink } from "react-router";

function NavBar(){
    return(
        <nav className="navbar navbar-light bg-light px-3">
            <NavLink to="/home" className="navbar-brand mb-0 h1" end>Zelda challenge</NavLink>
            <NavLink to="/login" className="btn btn-warning">Connexion</NavLink>
            {/* <NavLink to="/" end>Home</NavLink>
            <NavLink to="/user" end>User</NavLink> 
            <NavLink to="/*"></NavLink>
            */}
       </nav>
    )
}
export default NavBar;