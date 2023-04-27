import { UserMenuContainer, UserHello, LogOutButton } from "./UserMenu.styled";

export function UserMenu() {
    return (
        <UserMenuContainer>
            <UserHello>Hello, Guest</UserHello>
            <LogOutButton>Log out</LogOutButton>
        </UserMenuContainer>
    );
}
