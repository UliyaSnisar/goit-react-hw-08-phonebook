import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

// export const getVisibleContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };
//--------используем мемоизацию:
export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
