import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from '../redux/phonebook/contactSlice';

import ContactList from '../contactList/ContactList';
import ContactForm from '../form/ContactForm';

const Contacts = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [createContact] = useCreateContactMutation();

  return (
    <div>
      <ContactForm createContact={createContact} />
      {data && (
        <ContactList
          contacts={data}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </div>
  );
};

export default Contacts;
