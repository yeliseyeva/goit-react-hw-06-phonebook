import ContactsList from "./Components/ContactsList/ContactsList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Container from "./Components/Container/Container";
import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
}

export default App;
