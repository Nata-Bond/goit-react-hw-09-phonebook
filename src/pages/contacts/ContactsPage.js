import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactList from '../../components/contactList/ContactList';
import s from "./contactsPage.module.css"


const ContactsPage = () => {
    return (
        <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
  
        <ContactList />
        </div>
    );
}

export default ContactsPage;