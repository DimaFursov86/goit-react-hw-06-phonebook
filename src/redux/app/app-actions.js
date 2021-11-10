import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/addContact", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction("phonebook/deleteContact");

const changeFilter = createAction("phonebook/changeFilter");

const phonebookActions = { addContact, deleteContact, changeFilter };
export default phonebookActions;

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {

//       id: shortid.generate(),
//       name,
//       number,
//     },

// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
