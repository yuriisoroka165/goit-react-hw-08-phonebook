export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.getIsLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;