import heroImage from "../assets/images/programming.svg";

function Hero() {
  return (
    <section id="home" className=" bg-black ">
      <div className="container flex items-center justify-between">
        <article>
          <span className="tagline">MIAN CHANNU, PAKISTAN</span>
          <div>
            <h1 className="">A Web Developer</h1>
            <p className="body">
              I&apos;m Ali, a young and creative web developer that likes to
              develop websites and help people build their brand.
            </p>
          </div>
          <button className="btn btn-primary">Let's Talk</button>
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
