import React from 'react';

import { ContactsTitle, List } from './ContactList.styled';
import { ContactElement } from 'components/ContactElement';
import { useSelector } from 'react-redux';
import { filteredContactsSelector } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(filteredContactsSelector);
  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <List>
        {contacts.map(item => (
          <ContactElement
            id={item.id}
            key={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </List>
    </>
  );
}
