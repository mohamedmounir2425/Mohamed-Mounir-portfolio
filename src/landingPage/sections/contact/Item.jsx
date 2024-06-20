import { motion } from "framer-motion";
import "./contact.scss";

function Item({ item, variants }) {
  const { title, text } = item;
  return (
    <motion.div className="item" variants={variants}>
      <h2>{title}</h2>
      <span>{text}</span>
    </motion.div>
  );
}

export default Item;
