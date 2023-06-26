import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { addContacts } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts, getFilter } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const { name, number } = data;

    console.log(data);

    const existingContact = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    console.log(existingContact);

    if (existingContact) {
      alert(`${existingContact.name} already exists`);
    } else {
      dispatch(addContacts(data));
    }
  };

  const filterHandler = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterHandler} />
      <Contacts />
    </div>
  );
};

export default App;
