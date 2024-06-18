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
                I've started my journey with programming back in 2022 with C++
                and Arduino for my studies for dealing with sumo robots and
                sensors, then I started learning about programmable logic
                controller with Ladder logic language. Later, I started learning
                web development on my own by learning Javascript, then I decided
                to be a Frontend web developer.
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
