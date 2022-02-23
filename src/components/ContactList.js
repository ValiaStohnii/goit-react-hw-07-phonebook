import ContactListItem from './ContactListItem';
// import { useSelector } from 'react-redux';

const ContactList = ({ contacts }) => {
  // const filter = useSelector(state => state.filter.filter);

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(c =>
  //     c.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  return (
    <ul>
      {/* <ContactListItem contact={ getFilteredContacts()}/> */}
      {contacts.map(contacts => (
        <ContactListItem key={contacts.id} {...contacts} />
      ))}
    </ul>
  );
};

export default ContactList;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import contactsAction from '../redux/contacts/contacts-actions';
// import { getVisibleContacts } from '../redux/contacts/contacts-selectors';

// const ContactList = () => {
//   const contacts = useSelector(getVisibleContacts);
//   const dispatch = useDispatch();

//   const onDeleteContact = id => dispatch(contactsAction.deleteContact(id));

//   return (
//     <ul>
//       {contacts.map(contacts => (
//         <li key={contacts.id} name={contacts.name}>
//           <p>{contacts.name}</p>
//           <p>{contacts.number}</p>
//           <button type="button" onClick={() => onDeleteContact(contacts.id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
