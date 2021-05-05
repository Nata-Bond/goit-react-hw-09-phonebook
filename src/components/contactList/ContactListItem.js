import React, {useCallback} from "react";
import s from "./contacts.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";

const ContactListItem = ({ name, number, id }) => {

const dispatch = useDispatch();


  const handleDelete = useCallback(() => {
    dispatch(deleteContact(id));
  },[dispatch, id]);

  return (
    <li className={s.listItem}>
      <span>
        {name} : {number}
      </span>
      <button className={s.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};



export default ContactListItem;
