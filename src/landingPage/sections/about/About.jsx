import "./about.scss";
function About() {
  return (
    <div className="aboutContainer d-flex align-items-center">
      <div className="container">
        <div className="row  ">
          <div className="col-lg-6 ">
            <div className="imageContainer p-4">
              <img className="w-100" src="/images/about/Type.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="textContainer text-center text-lg-start">
              <span className="mb-1">I'm a Web Developer</span>
              <h3>I work on web applications and ready to learn anything..</h3>
              <p>
                I'm a Frontend Developer from Egypt. I have a degree in Business
                from Ain shams University-2020.
              </p>
              <span>More about me...</span>
              <p>
                I've started my programming journey in 2022 after completing my
                military service. I began by learning various programming
                courses online. I then completed ITI's four-month scholarship in
                Frontend and Cross-Platform Mobile Development. After the
                scholarship, I worked as a part-time Frontend Developer at
                PTSware from May to September 2023. I then joined ITI's
                nine-month scholarship in Web & UI Development, where I learned
                low-level programming languages and deepened my skills. Now, I
                am confident in working on any web projects and applying my
                skills to real-world projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="brush_1">
        <img src="/images/brushes/about/1.png" alt="" />
      </div>
      <div className="brush_2">
        <img src="/images/brushes/about/2.png" alt="" />
      </div>
    </div>
  );
}

export default About;
