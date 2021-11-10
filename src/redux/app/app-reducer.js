import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";
import contactsObj from "../../contacts.json";
// import { useSelector } from 'react-redux';
// import { getVisibleContacts } from './app-selectors';
// const getVcontacts = useSelector(getVisibleContacts);
// const existName = getVcontacts.map((obj) => obj.name);
console.log(contactsObj);
const contacts = createReducer(contactsObj, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  // const contactsName = useSelector(getContacts);
  // const getVcontacts = useSelector(getVisibleContacts);
  // const existName = getVcontacts.map((obj) => obj.name);
  // if (existName.includes(payload.name)) {
  //     alert(`${payload.name} is already in contacts`);
  // } else {
  //   return  [...state, payload]
  // }

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  //   [actions.toggleCompleted]: (state, { payload }) =>
  //     state.map(todo =>
  //       todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
  //     ),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

// import { combineReducers } from 'redux';
// import types from './app-selectors';
// import contactsObj from "./contacts.json";

// const contacts = (state = contactsObj, { type, payload }) => {
//   switch (type) {
//       case types.ADD:

//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts,
//   filter,
// });
