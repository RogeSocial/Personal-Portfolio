import "../styling/home-con.css";
import "../styling/about-con.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="home-container">
        <h1>
          Hello, I'm <span className="name-highlight">Linus Rengbrandt</span>
          <br></br> I'm a Fullstack Developer
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          vel dolorum exercitationem in quaerat nemo, cupiditate rem animi
          voluptatum illo ea atque alias molestias ullam esse soluta delectus
          vitae eius.
        </p>
      </div>

      <div className="about-container">
        <h1>
          <span className="highlight">/</span> About Me
        </h1>
        <h2>
          Passionate Full-Stack Developer: <br></br>
          Crafting Digital Excellence with Every Line of Code.
        </h2>
        <p className="about-info">
          Ever since I was a child, my fascination with computers and
          programming has been a guiding force. Now, as I navigate the exciting
          journey of becoming a Full-Stack Developer, my childhood curiosity has
          transformed into a relentless pursuit of knowledge. Each line of code
          is a step towards turning passion into expertise, as I strive to bring
          my long-held interest to life in the dynamic world of programming.
        </p>
        <Link to="/" className="more-about">
          <p>More about me</p>
        </Link>
      </div>

      <div className="projects-container">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          vel dolorum exercitationem in quaerat nemo
        </p>
      </div>

      <div className="contact-container">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          vel dolorum exercitationem in quaerat nemo
        </p>
      </div>
    </>
  );
}

export default LandingPage;
