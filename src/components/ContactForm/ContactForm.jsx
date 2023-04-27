// import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import css from "./ContactForm.module.css";

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    // в даній функції знаки питання після значень перевіряють чи існує таке значення перед викликом toLowerCase()
    const newContactAudit = newContact => {
        return contacts.filter(
            contact =>
                contact.name?.toLowerCase() === newContact.name?.toLowerCase()
        );
    };

    const contactFormSubmitHandler = newContact => {
        if (newContactAudit(newContact).length > 0) {
            alert(`${newContact.name} is already in contacts.`);
            return false;
        } else {
            dispatch(addContact(newContact));
            return true;
        }
    };
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if (contactFormSubmitHandler({ name, number })) {
            form.reset();
        }
    };

    return (
        <form className={css.contactForm__form} onSubmit={handleSubmit}>
            <label
                htmlFor="name"
                className={`${css.contactForm__field} ${css.contactForm__field_label}`}
            >
                Name:
                <input
                    className={css.contactForm__input}
                    id="name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label
                htmlFor="number"
                className={`${css.contactForm__field} ${css.contactForm__field_label}`}
            >
                Number:
                <input
                    className={css.contactForm__input}
                    id="number"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className={css.contactForm__submit_button}>
                Add contact
            </button>
        </form>
    );
}
