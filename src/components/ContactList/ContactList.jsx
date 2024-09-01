import {  useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";

const ContactList = () => {
    const visibleContacts = useSelector(selectFilteredContacts);

    return (<ul className={css.phoneList}>
        {visibleContacts.map(({name, number, id}) => {
            return <li key={id} className={css.phoneListItem}>
                <Contact
                name={name}
                number={number}
                id={id}/>
            </li>
        })}
    </ul>)
}

export default ContactList