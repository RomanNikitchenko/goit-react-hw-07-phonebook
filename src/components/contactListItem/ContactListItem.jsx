import { useDeleteContactMutation } from '../redux/phonebook/ContactSlice';

const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li key={id}>
      <span>
        {name}: {phone}
      </span>
      <button onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

export default ContactListItem;
