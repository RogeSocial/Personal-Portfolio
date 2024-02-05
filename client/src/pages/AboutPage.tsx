import "../styling/about-page.css";

import code1 from "../images/code1.jpg";
import code2 from "../images/code2.jpg";

function AboutPage() {
  return (
    <>
      <div className="about-start">
        <h1>
          Greetings! <br></br>
          I'm Linus Rengbrandt
        </h1>
        <p>
          I'm a passionate programmer on a journey to master the art of
          full-stack development. Currently immersed in the world of academia,
          I'm sharpening my skills and expanding my coding repertoire.
        </p>
      </div>
      <div className="my-journey">
        <div className="code-info-container">
          <img src={code1} alt="Code 1" width={550} className="rounded-image" />
          <div className="info-right">
            <h2>
              <span className="highlight">/</span> How I started programming
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil, eveniet
              aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
              error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
              eos sapiente officiis modi at sunt excepturi expedita sint?
            </p>
          </div>
        </div>
        <div className="code-info-container">
          <div className="info-left">
            <h2>
              <span className="highlight">/</span> I built my first website in
              2014
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil, eveniet
              aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
              error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
              eos sapiente officiis modi at sunt excepturi expedita sint?
            </p>
          </div>
          <img src={code2} alt="Code 2" width={550} className="rounded-image" />
        </div>
      </div>
      <div className="education">
        <h1>
          <span className="highlight">/</span> Education
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
        <div className="education-info">
          <div className="education-info-card">
            <h2>Hedda Anderssongymnasiet, Lund <span className="highlight">/</span> 2018-2021</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </div>
          <div className="education-info-card">
          <h2>Teknikhögskolan, Lund <span className="highlight">/</span> 2022-2024</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
