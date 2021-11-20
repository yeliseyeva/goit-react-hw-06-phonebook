import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactActions from "../../redux/contacts-actions";
import { getFilter } from "../../redux/selectors";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Find contacts by name"
      value={value}
      onChange={(e) => dispatch(contactActions.changeFilter(e.target.value))}
      name="name"
      required
      autoComplete="off"
    />
  );
}

export default Filter;
