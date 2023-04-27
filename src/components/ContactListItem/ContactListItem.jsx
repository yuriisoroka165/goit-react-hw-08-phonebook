import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContact } from "redux/contacts/operations";

import css from "./ContactListItem.module.css";

const ContactsListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
        <li className={css.contactsListItem__item}>
            <span className={css.contactsListItem__item_circle}></span>
            <p className={css.contactsListItem__item_name}>
                {name}:
                <span className={css.contactsListItem__item_number}>
                    {number}
                </span>
            </p>
            <button
                type="button"
                className={css.contactsListItem__button}
                onClick={() => dispatch(deleteContact(id))}
            >
                Delete
            </button>
        </li>
    );
};

ContactsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactsListItem;
