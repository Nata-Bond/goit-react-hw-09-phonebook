import React, {useCallback} from "react";
import s from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactsActions";
import contactsSelector from "../../redux/contacts/contactsSelectors";

const Filter = () => {

const filter = useSelector(contactsSelector.getFilter);
const dispatch = useDispatch()


  const handleChangeFilter = useCallback((e) => {
    dispatch(changeFilter(e.target.value))
  },[dispatch]);

  return (
    <>
      <label>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </>
  );
};


export default Filter;
