import ContactListItem from 'components/contactListItem/ContactItem';
import { useSelector } from 'react-redux';

const getNormalizedFilter = (filterValue, contacts) => {
  const normalizedFilter = filterValue.toLowerCase();

  const visibleTodos = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return visibleTodos;
};

const ContactList = ({ contacts }) => {
  const filterValue = useSelector(state => state.phonebook.filter);
  const visibleFilter = getNormalizedFilter(filterValue, contacts);

  return (
    <ul>
      {visibleFilter.map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone} />;
      })}
    </ul>
  );
};

export default ContactList;
