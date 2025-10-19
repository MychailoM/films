import '../styles/NotFound.css';
import { NavLink } from 'react-router-dom';
import "../App.css";

export default function NotFound() {
  return (
    <div className="container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-subtitle">Oops! Page not found 😢</p>      
      <NavLink className="notfound-btn" to='/'>Go Home</NavLink>
    </div>
  );
}
