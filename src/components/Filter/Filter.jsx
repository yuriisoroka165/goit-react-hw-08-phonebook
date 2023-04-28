import { useDispatch } from "react-redux";

import { filterContacts } from "redux/contacts/filterSlice";
import css from "./Filter.module.css";

export default function Filter() {
    const dispatch = useDispatch();
    const contactFilter = event => {
        dispatch(filterContacts(event.target.value));
    };

    return (
        <>
            <label
                htmlFor="filter-field"
                className={`${css.filter__field} ${css.filter__field_label}`}
            >
                Find contacts by name:
                <input
                    id="filter-field"
                    className={css.filter__field_input}
                    type="text"
                    placeholder="Enter search query"
                    onChange={contactFilter}
                />
            </label>
        </>
    );
}
