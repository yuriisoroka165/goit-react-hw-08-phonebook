import { FcContacts } from "react-icons/fc";

import { HomeContainer } from "./Home.styled";
import { iconsSize } from "../../constants/iconsSize";

export default function Home() {
    return (
        <HomeContainer>
            <h1>Welcome to phonebook app</h1>
            <FcContacts size={iconsSize.large} />
        </HomeContainer>
    );
}
