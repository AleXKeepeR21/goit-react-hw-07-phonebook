import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selector';
import { fetchContacts } from 'redux/operations';

export function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const getContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(getContacts);

  //   if (parsedContacts !== 0) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const contactsList = useSelector(state => state.contacts.contacts);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        textShadow: 'rgb(232, 216, 137) 1px 0 10px',
        backgroundColor: 'rgba(0, 0, 255, 0.032)',
      }}
    >
      {/* <>
        {contactsList.length > 0 && (
          <h3>You have {contactsList.length} contast(s)</h3>
        )}
      </> */}

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      {isLoading && !error}
      <ContactList />
    </div>
  );
}
