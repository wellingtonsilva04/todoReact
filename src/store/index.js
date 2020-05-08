import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persitConfig = {
  key: '@todoRoot',
  storage,
};

const persistedReducer = persistReducer(persitConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
