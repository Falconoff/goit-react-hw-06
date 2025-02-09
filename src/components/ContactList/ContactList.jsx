import { useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contactsSlice';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      {filteredContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
