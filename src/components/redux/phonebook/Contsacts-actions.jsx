import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction('phonebook/filterChange');

const ContactsActions = {
  filterChange,
};

export default ContactsActions;
