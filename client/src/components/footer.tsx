import "../styling/footer.css"
import { Link } from "react-router-dom"

function footer () {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-profile">
                    <h1>Linus Rengbrandt</h1>
                    <h2>Fullstack Developer Student</h2>
                    <a className="footer-socials" href="https://github.com/RogeSocial" target="_blank">GitHub</a>
                    <a className="footer-socials" href="https://www.linkedin.com/in/linus-rengbrandt-829421189/" target="_blank">LinkedIn</a>
                </div>
                <div className="footer-contact">
                    <h1>Get in touch</h1>
                    <h2>EMAIL ME:</h2>
                    <p>linus@rengbrandt.com</p>
                </div>
            </div>
            <div className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link>
            </div>
        </div>
    )
}

export default footer