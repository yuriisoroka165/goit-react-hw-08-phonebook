import { useDispatch, useSelector } from "react-redux";

import { selectUserName } from "../../redux/auth/authSelectors";
import { logout } from "redux/auth/authOperations";
import { UserMenuContainer, UserHello, LogOutButton } from "./UserMenu.styled";

export function UserMenu() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    return (
        <UserMenuContainer>
            <UserHello>Hello, {userName}</UserHello>
            <LogOutButton type="button" onClick={() => dispatch(logout())}>
                Log out
            </LogOutButton>
        </UserMenuContainer>
    );
}
