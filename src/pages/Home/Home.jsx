import { FcContacts } from "react-icons/fc";

import { Container } from "./Home.styled";
import { iconsSize } from "../../constants/iconsSize";

export default function Home() {
    return (
        <Container>
            <h1>Welcome to phonebook app</h1>
            <FcContacts size={iconsSize.large} />
        </Container>
    );
}
