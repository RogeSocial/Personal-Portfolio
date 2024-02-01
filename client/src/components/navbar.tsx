import "../styling/navbar.css"
import { Link } from "react-router-dom"

function navbar () {
    return (
        <div className="navbar">
            <Link to="/" className="nav-title"><h1>Linus Rengbrandt</h1></Link>
            <div className="nav-right">
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </div>
    )
}

export default navbar