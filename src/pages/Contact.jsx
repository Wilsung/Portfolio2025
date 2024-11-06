import { useState, useRef } from "react";
import Input from "../components/Input";

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [mailSent, setMailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (
      data.name.length > 0 &&
      data.email.length > 0 &&
      data.message.length > 0
    ) {
      emailjs
        .sendForm("service_gf17ags", "template_dtm49sy", form.current, {
          publicKey: "bRJxBt0-CGJe1P2Us",
        })
        .then(
          () => {
            setMailSent(true)
          },
          (error) => {
            setMailSent(false)
            setError(
              "There was an issue sending the mail, please try again later."
            );
          }
        );
    } else {
      setError("Please enter valid inputs.");
    }
  };

  return (
    <section className="spacing">
      <div className="flex flex-col gap-6">
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="title">Contact Me</h2>

          {!mailSent ? (
            <div>
              <Input id="name" label="Name" name="name" type="text" required />
              <Input
                id="email"
                label="Email"
                name="email"
                type="email"
                required
              />
              <Input
                id="message"
                label="Message"
                type="text"
                name="message"
                isTextArea
                required
              />
              <button className="button">Send</button>
              {error && (
                <p className="pt-3 text-base italic text-red-300">{error}</p>
              )}
            </div>
          ) : (
            <p className="pt-[1rem]">Mail sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
