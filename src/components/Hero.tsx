import heroImage from "../assets/images/programming.svg";

function Hero() {
  return (
    <section
      id="hero"
      className="container bg-black flex items-center justify-between"
    >
      <article>
        <h1 className="text-white removeThisClass">A Web Developer</h1>
        <p className="body text-grey removeThisClass">
          I&apos;m Ali, a young and creative web developer that likes to develop
          websites and help people build their brand.
        </p>
        <button className="btn btn-primary">Let's Talk</button>
      </article>

      <div>
        <img
          src={heroImage}
          alt="Ali at his desk, programming your future website"
        />
      </div>
    </section>
  );
}

export default Hero;
