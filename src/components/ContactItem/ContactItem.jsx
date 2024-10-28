import css from './ContactItem.module.css';
import { FaPhone, FaUser } from 'react-icons/fa6';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.data}>
        <p>
          <FaUser className={css.icon} />
          Name: {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          Phone: {number}
        </p>
      </div>

      <div className={css.options}>
        <button
          type="button"
          className={css.btn}
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
