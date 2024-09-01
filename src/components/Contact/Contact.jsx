import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';

const Contact = ({name, number, id}) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <>
      <div>
        <div className={css.contactItemWrapper}>
          <FaUser />
          <p>{name}</p>
        </div>  
        <div className={css.contactItemWrapper}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
  
      <button type="button" onClick={onDeleteContact}
      >Delete</button>
    </>
  )
}

export default Contact
