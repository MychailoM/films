import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import "../App.css";

export default function Header () {
    return(
        <header className="header">
            <div className="container header-container">
                <NavLink className="link" to='/'>Home</NavLink>
                <NavLink className="link" to='/movies'>Movies</NavLink>
                <NavLink className="link" to='/about'>About</NavLink>
            </div>
        </header>
    )
}