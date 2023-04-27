import { useSelector } from "react-redux";

import { selectContacts, selectFilter } from "redux/contacts/selectors";

import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const visibleContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={css.contactList__list}>
            {visibleContacts?.map(({ id, name, number }) => (
                <ContactListItem key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
}
