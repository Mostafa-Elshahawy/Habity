import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NavbarStyle.css'

const Navbar:React.FC = () => {
    return (
         <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/habits">Habits</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}               

export default Navbar;