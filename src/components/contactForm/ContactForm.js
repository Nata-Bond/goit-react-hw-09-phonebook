import React, { useState } from "react";
import s from "./contactForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import contactOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";




const ContactForm = () => {
  const [name, setName] = useState('')
  const updateName = (e) => {
    setName(e.target.value)
  }


  const [number, setNumber] = useState('')
  const updateNumber = (e) => {
    setNumber(e.target.value)
  }

const checkFullIsForm = (name, number) => {
  if ((name.length > 0) & (number.length > 0)) {
    return true;
  } else {
    alert(`form is not full`);
    return false;
  }
};

const contacts = useSelector(contactsSelectors.getContacts);
const checkUnique = (name, number) => {

  if (contacts.length > 0) {
    const isExist = !!contacts.find(
      (contact) => contact.name === name || contact.number === number
    );
    isExist && alert(`${name || number} is already exist`);
    return !isExist;
  }
  return true;
};
 const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();
  const unique = checkUnique(name, number);
  const fullForm = checkFullIsForm(name, number);
  unique && fullForm && dispatch(contactOperations.addContact({name, number}));
  setName('')
  setNumber('')
};



  return (
    <>
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={updateName}
        />
      </label>
      <label>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={updateNumber}
        />
      </label>
      <button className={s.button} type="submit">
        Add
      </button>
    </form>
  </>
 );
}

export default ContactForm;



