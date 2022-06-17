import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../redux/phonebook/ContactSlice';

import ContactList from '../contactList/ContactList';
import ContactForm from '../form/ContactForm';
import Filter from '../filter/filter';

const Contacts = () => {
  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  return (
    <div>
      <ContactForm createContact={createContact} contacts={data} />
      <Filter />
      {data && <ContactList contacts={data} />}
    </div>
  );
};

export default Contacts;
