import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactElement.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

export function ContactElement({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteContactFromState = e => {
    dispatch(deleteContact(e.target.dataset.id));
  };

  return (
    <Item>
      {name}: {number}
      <Button onClick={deleteContactFromState} data-id={id}>
        Delete contact
      </Button>
    </Item>
  );
}

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
