import {useState, useEffect} from "react";
import ContactsList from "./Components/ContactsList/ContactsList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Container from "./Components/Container/Container";
import Filter from "./Components/Filter/Filter";
import shortid from "shortid";

const contactsArray = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

function App () {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? contactsArray
  });
  const [filter, setFilter] = useState('')

  const addContact = contact => {
    contacts.some((contactName) => contactName.name === contact.name)
    ? alert("A user with the same name has already been added")
    : setContacts(prevContacts => [
      { id: shortid.generate(), ...contact }, ...prevContacts
    ])
  }

  const onDelete = e => {
    setContacts(prevContacts => prevContacts.filter((contact) => contact.id !== e))
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  useEffect( () => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  } 

  return (
    <>
    <Container title="Phonebook">
      <ContactForm  addContact={addContact}/>
    </Container>

    <Container title="Contacts">
      <Filter value={filter} changeFilter={changeFilter}/>
      <ContactsList contacts={filterContacts()} name={contacts.name} onDelete={onDelete}/>
    </Container>
    </>
  )
}




export default App;