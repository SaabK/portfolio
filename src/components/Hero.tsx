import heroImage from "../assets/images/programming.svg";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section id="home" className=" bg-black ">
      <div className="container flex items-center justify-between">
        <article>
          <span className="tagline">MIAN CHANNU, PAKISTAN</span>
          <div>
            <h1 className="">
              A{" "}
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter: any) => {
                  typewriter
                    .typeString(
                      "<span style='color: #ebff00'>Web Developer</span>"
                    )
                    .pauseFor(1300)
                    .deleteAll()
                    .typeString(
                      "<span style='color: red;'>Content Creator</span>"
                    )
                    .pauseFor(1300)
                    .deleteAll()
                    .typeString(
                      "<span style='color: #AAFF00;'>Freelancer</span>"
                    )
                    .pauseFor(2400)
                    .start();
                }}
              />
            </h1>
            <p className="body">
              I&apos;m Ali, a young and creative web developer that likes to
              develop websites and help people build their brand.
            </p>
          </div>
          <button className="btn btn-primary">
            <a
              href="#contact"
              style={{ color: "black", textDecoration: "none" }}
            >
              Let's Talk
            </a>
          </button>
        </article>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Ali at his desk, programming your future website"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
