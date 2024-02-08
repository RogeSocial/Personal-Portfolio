import "../styling/home-con.css";
import "../styling/about-con.css";
import "../styling/projects-con.css";
import "../styling/contact-con.css";

import { useState } from "react";
import { handleSubmit } from "../components/ValidateInputs.js";

import { Link } from "react-router-dom";

function LandingPage() {
  const [errorMessage, setErrorMessage] = useState('');

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
        <Link to="/about" className="more-about">
          <p>More about me</p>
        </Link>
      </div>

      <div className="projects-container">
        <h1>
          <span className="highlight">/</span> Projects
        </h1>
        <h2>
          Here are some of my projects that I've worked on. <br /> Feel free to
          take a look and see what I've been up to.
        </h2>

        <div className="project">
          <div className="project-box left">
            <Link to="/">
              <h2>Project 1</h2>
            </Link>
          </div>
          <p className="description left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat. Voluptatem quaerat non architecto ab laudantium modi minima
            sunt esse temporibus sint culpa, recusandae aliquam numquam totam
            ratione voluptas quod exercitationem fuga. Possimus quis earum
            veniam quasi aliquam eligendi, placeat qui corporis!
          </p>
        </div>

        <div className="project">
          <p className="description right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat. Voluptatem quaerat non architecto ab laudantium modi minima
            sunt esse temporibus sint culpa, recusandae aliquam numquam totam
            ratione voluptas quod exercitationem fuga. Possimus quis earum
            veniam quasi aliquam eligendi, placeat qui corporis!
          </p>
          <div className="project-box right">
            <Link to="/">
              <h2>Project 2</h2>
            </Link>
          </div>
        </div>

        <div className="project">
          <div className="project-box left">
            <Link to="/">
              <h2>Project 3</h2>
            </Link>
          </div>
          <p className="description left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat. Voluptatem quaerat non architecto ab laudantium modi minima
            sunt esse temporibus sint culpa, recusandae aliquam numquam totam
            ratione voluptas quod exercitationem fuga. Possimus quis earum
            veniam quasi aliquam eligendi, placeat qui corporis!
          </p>
        </div>
      </div>

      <div className="contact-container">
        <h1>
          Interested in working together? <br />
          Let's get in touch!
        </h1>
        <form onSubmit={(e) => handleSubmit(e, setErrorMessage)} name="contact-form">

          <label>Enter your name</label>
          <input type="text" id="name" />
          <label>Your email address</label>
          <input type="email" id="email" />
          <label>Describe your inquiry</label>
          <textarea id="message"></textarea>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit">Contact me!</button>
        </form>
      </div>
    </>
  );
}

export default LandingPage;
