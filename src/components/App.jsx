// import Contacts from './pages/contacts';

// const App = () => {
//   return (
//     <div>
//       <Contacts />
//     </div>
//   );
// };

// export default App;

import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from './redux/phonebook/contactSlice';

import ContactList from './contactList/contactList';
import ContactForm from './form/contactForm';
import Filter from './filter/filter';

const App = () => {
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

export default App;
