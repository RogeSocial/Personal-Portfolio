import "../styling/navbar.css"
import { Link } from "react-router-dom"

function navbar () {
    return (
        <div className="navbar">
            <Link to="/" className="nav-title"><h1>Linus Rengbrandt</h1></Link>
            <div className="nav-right">
                <Link to="/about">About</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link>
            </div>
        </div>
    )
}

export default navbar