import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer, RootReducer } from './reducers';

const persitConfig: PersistConfig<any> = {
  key: '@todoRoot',
  storage,
};

const persistedReducer = persistReducer<RootReducer>(persitConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

const persistor = persistStore(store);

export type StoreDispatch = typeof store.dispatch;

export type StoreState = ReturnType<typeof store.getState>;

export { store, persistor };
