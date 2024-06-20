import { motion } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function Form() {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSucess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xu258ke",
        "template_twl2cs4",
        form.current,
        "1GE7b8grlr_mc462u"
      )
      .then(() => {
        setSucess(true);
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
    >
      <input name="name" type="text" required placeholder="Name" />
      <input name="email" type="email" required placeholder="Email" />
      <textarea name="message" rows={8} placeholder="Message"></textarea>

      <button type="submit">
        <span className="layerSpan">
          <span className="innerSpan">Submit</span>
        </span>
      </button>
      {error && "Error"}
      {success && "Success"}
    </motion.form>
  );
}

export default Form;
