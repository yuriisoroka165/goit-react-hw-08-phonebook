import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "redux/contacts/contactsOperations";
import { selectError, selectIsLoading } from "redux/contacts/contactsSelectors";

import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import { Container } from "./Contacts.styled";

export default function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <h1>Phonebok</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && <h3>Request in progress...</h3>}
            <ContactList />
            {error && <h3>{error}</h3>}
        </Container>
    );
}
