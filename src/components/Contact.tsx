import { socials } from "../data/data";
import SocialIcon from "./SocialIcon";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(20, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .min(10, "Must be 10 characters or more")
        .max(200, "Bro stop! Write less than 200 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await toast.promise(
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current!,
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          ),
        {
          pending: "Sending your mail 🚄",
          success: "Your email was sent 👌",
          error: "Oops! An error occurred 🤯",
        },
        {
          theme: "colored",
        }
      );

      resetForm();
    },
  });

  const animate = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };

  const counterAnimate = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };

  return (
    <section id="contact">
      <div className="container flex justify-between">
        <motion.h1
          variants={animate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Let's <span className="text-yellow">Talk</span>
        </motion.h1>
        <motion.div
          className="information flex-1"
          variants={animate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1>
            Let's <span className="text-yellow">Talk</span>
          </h1>
          <div className="text-content">
            <article>
              <h4>Contact Information</h4>
              <p>ContactIbnNaseer@gmail.com</p>
              <p>+92 312 6146204</p>
            </article>

            <article>
              <p>
                I am based in Mian Channun, District Khanewal, Pakistan. And I'm
                always ready to connect and discuss potential opportunities.
              </p>
            </article>

            <article>
              <p>Feel free to message me at any time 😉</p>
            </article>
          </div>

          <ul className="social-icons">
            {socials.map((social, index) => (
              <SocialIcon social={social} key={index} />
            ))}
          </ul>
        </motion.div>

        <motion.form
          variants={counterAnimate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1"
          id="form"
          ref={form}
          onSubmit={formik.handleSubmit}
        >
          <div className="form-body">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className={
                  formik.touched.name && formik.errors.name
                    ? "border-error"
                    : ""
                }
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <div className="error">
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null}
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? "border-error"
                    : ""
                }
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null}
              </div>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className={
                  formik.touched.message && formik.errors.message
                    ? "border-error"
                    : ""
                }
                cols={22}
                rows={9}
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
              ></textarea>
              <div className="error">
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : null}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={!formik.isValid || !formik.dirty}
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
