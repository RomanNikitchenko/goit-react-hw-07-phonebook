import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from '../redux/phonebook/contactSlice';

import ContList from '../contacList/ContList';
import ContactFor from '../for/ContactFor';

const Contacts = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [createContact] = useCreateContactMutation();

  return (
    <div>
      <ContactFor createContact={createContact} />
      {data && (
        <ContList
          contacts={data}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </div>
  );
};

export default Contacts;
