import css from "./Contact.module.css";
import { getRandomIcon } from "../../helpers";

import { FaPhoneAlt } from "react-icons/fa";
import { useMemo } from "react";


export default function Contact({ contact, onDelete }) {
  const randomIcon=useMemo(()=>getRandomIcon(),[])
  return (
    <div className={css["contact-container"]}>
      <div className={css["name-number-container"]}>
        <div className={css["icon-name-container"]}>
          {randomIcon}
          <p>{contact.name}</p>
        </div>
        <div className={css["icon-name-container"]}>
          <FaPhoneAlt className={css.phone} size={14} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}
