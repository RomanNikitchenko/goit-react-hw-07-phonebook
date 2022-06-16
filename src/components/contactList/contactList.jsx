const ContList = ({ contacts, onDelete, deleting }) => {
  return (
    <ul>
      <h1>ContList</h1>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <span>
              {name}: {phone}
            </span>
            <button onClick={() => onDelete(id)}>
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContList;
