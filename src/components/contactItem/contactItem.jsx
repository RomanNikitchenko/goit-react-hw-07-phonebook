import { useDeleteContactMutation } from 'components/redux/phonebook/contactSlice';

const ContactItem = ({ id, name, phone }) => {
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

export default ContactItem;
