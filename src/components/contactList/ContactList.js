import React, { useEffect} from "react";
import ContactListItem from "./ContactListItem";
import s from "./contacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const ContactList = () => {

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);


const contacts = useSelector(contactsSelectors.getContacts);
const filter = useSelector(contactsSelectors.getFilter);
const isLoading = useSelector(contactsSelectors.getLoading);





  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {isLoading && <h1>...Loading</h1>}
      <ul className={s.list}>
        {filteredContacts &&
          filteredContacts.map((contact) => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
      </ul>
    </>
  );
};




export default ContactList;
