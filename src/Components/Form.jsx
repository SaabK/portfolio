import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ModalComponent from "./ModalComponent";

function Form() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .max(15, "Must be less than 15 characters")
        .required("Required"),
      lastName: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .max(15, "Must be less than 15 characters"),
      email: Yup.string().email("Invalid Email Address"),
    }),
    onSubmit: (values) => {
      console.log(values);
      emailjs
        .sendForm(
          "service_zvdmfi7 ",
          "template_07pj3bg",
          form.current,
          "Wm3Ws8XBquAq_Np3c"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsModalOpen(true);
            setStatus("success");
          },
          (error) => {
            // Modal here
            console.log(error.text);
            setIsModalOpen(true);
            setStatus("error");
          }
        );
    },
  });

  return (
    <form ref={form} className="form" onSubmit={formik.handleSubmit}>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        status={status}
      />
      <div className="sameline">
        <div className="field firstname">
          <label htmlFor="firstname">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            data-testid="firstName"
          />
          <p data-testid="firstName-error">
            {formik.touched.firstName && formik.errors.firstName ? (
              <span>{formik.errors.firstName}</span>
            ) : null}
          </p>
        </div>

        <div className="field lastname">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            data-testid="lastName"
          />
        </div>
        <p data-testid="lastName-error">
          {formik.touched.firstName && formik.errors.lastName ? (
            <span>{formik.errors.lastName}</span>
          ) : null}
        </p>
      </div>

      <div className="field email">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          data-testid="email"
        />
        <p data-testid="email-error">
          {formik.touched.firstName && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
        </p>
      </div>

      <div className="field message">
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          data-testid="message"></textarea>
        <p data-testid="message-error">
          {formik.touched.firstName && formik.errors.message ? (
            <span>{formik.errors.message}</span>
          ) : null}
        </p>
      </div>

      <div className="submit-button">
        {/* <button type="submit" className="btn-submit">
          Send Message
        </button> */}
        <input className="btn-submit" type="submit" value="Send Message" />
      </div>
    </form>
  );
}
export default Form;
