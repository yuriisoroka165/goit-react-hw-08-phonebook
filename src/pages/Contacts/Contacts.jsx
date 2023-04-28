import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcLikePlaceholder } from "react-icons/fc";

import { fetchContacts } from "../../redux/contacts/contactsOperations";
import {
    selectError,
    selectIsLoading,
} from "../../redux/contacts/contactsSelectors";
import { selectIsAuthorized } from "../../redux/auth/authSelectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import { Container, NotAuthContainer } from "./Contacts.styled";
import { iconsSize } from "../../constants/iconsSize";

export default function App() {
    const dispatch = useDispatch();
    const isAuthorized = useSelector(selectIsAuthorized);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            {isAuthorized ? (
                <Container>
                    <h1>Phonebok</h1>
                    <ContactForm />
                    <h2>Contacts</h2>
                    <Filter />
                    {isLoading && !error && <h3>Request in progress...</h3>}
                    <ContactList />
                    {error && <h3>{error}</h3>}
                </Container>
            ) : (
                <NotAuthContainer>
                    <h1>Please log in to access the phonebook</h1>
                    <FcLikePlaceholder size={iconsSize.large} />
                </NotAuthContainer>
            )}
        </>
    );
}
