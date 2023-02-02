import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contact.slice';
import { filterReducer } from './Filter.slice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import ContactSlice from './Contact.slice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({ contacts: contactsReducer });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer.reducer,
    filter: filterReducer.reducer,
  },
});
