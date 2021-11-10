import s from "./ContactList.module.scss";
import ContactItem from "../ContactItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { getVisibleContacts } from "../../redux/app/app-selectors";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
