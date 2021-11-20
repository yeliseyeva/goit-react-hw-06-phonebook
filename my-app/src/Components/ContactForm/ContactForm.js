import { useState } from "react";
import s from "../ContactForm/ContactForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import contactActions from "../../redux/contacts-actions";
import { getContacts } from "../../redux/selectors";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const repeatedContact = contacts.some(
      (contactName) => contactName.name === name
    );
    if (repeatedContact) {
      alert("A user with the same name has already been added");
      return;
    }

    dispatch(contactActions.addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        className={s.enterContact}
        value={name}
        onChange={handleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <input
        type="tel"
        placeholder="Enter number"
        className={s.enterContact}
        value={number}
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button type="submit" className={s.submitButton}>
        Add
      </button>
    </form>
  );
}

export default ContactForm;
