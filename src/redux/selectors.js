export const filterSelector = state => state.filter;

export const contactsSelector = state => state.contacts;

export const filteredContactsSelector = state => {
  return state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });
};
