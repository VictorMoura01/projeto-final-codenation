import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

import persistedReducers from './persistReducers';

import rootReducer from './modules/rootReducer';

const store = createStore(
  persistedReducers(rootReducer),
  console.tron.createEnhancer()
);
const persistor = persistStore(store);

export { store, persistor };
