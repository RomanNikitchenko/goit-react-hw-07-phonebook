import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from './redux/phonebook/contactSlice';

import ContactList from './contactList/ContactList';
import ContactForm from './form/ContactForm';
import Filter from './filter/Filter';

const App = () => {
  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} contacts={data} />
      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList contacts={data} />}
    </div>
  );
};

export default App;
