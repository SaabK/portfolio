import React from "react";

function Form() {
  return (
    <form className="form">
      <div className="sameline">
        <div className="field firstname">
          <label htmlFor="firstname">
            First Name <span>*</span>
          </label>
          <input type="text" name="firstname" id="firstname" required />
        </div>

        <div className="field lastname">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
      </div>

      <div className="field email">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input type="text" name="email" id="email" required />
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
          required></textarea>
      </div>

      <div className="submit-button">
        <button className="btn-submit">Send Message</button>
      </div>
    </form>
  );
}

export default Form;
