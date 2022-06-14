import ContactForm from './form/contactForm';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';

const App = () => {
  //   const [contacts, setContacts] = useState(() => {
  //     //при первой загрузки получаем данные из локального хранилища либо записываем готовый массив контактов(обьектов)
  //     return (
  //       JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //       ]
  //     );
  //   });

  //   // первый раз при загрузки и каждый раз при изменении компонента перезаписываем в локальное хранилище
  //   useEffect(() => {
  //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
