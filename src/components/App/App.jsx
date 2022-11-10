import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

// dispatch очікує на екшн, переджає його редʼюсеру, редʼюсер перевіряє тайп, і в залежності від тайпу змінює стейт
// dispatch(єкшнКріейтор(пейлоад))=>reducer(state, action)=>newState

import { PhonebookTitle, Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <Filter />
      <ContactList />
    </Wrapper>
  );
};
