import { socials } from "../data/data";
import SocialIcon from "./SocialIcon";

function Contact() {
  return (
    <section id="contact">
      <div className="container flex justify-between">
        <div className="flex-1">
          <h1>
            Let's <span className="text-yellow">Talk</span>
          </h1>
          <div>
            <article>
              <h3>Contact Information</h3>
              <p>ContactIbnNaseer@gmail.com</p>
              <p>Mian Channun, Pakistan</p>
            </article>

            <article>
              <p>
                Something must go right here in order to fill the space, you
                know I don't like it empty.
              </p>
            </article>

            <article>
              <p>Again dummy text or something useful here</p>
            </article>
          </div>

          <ul className="social-icons">
            {socials.map((social, index) => (
              <SocialIcon social={social} key={index} />
            ))}
          </ul>
        </div>

        <form className="flex-1">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Name</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
