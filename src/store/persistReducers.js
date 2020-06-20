import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'codenation_fashionista',
      storage,
      whitelist: ['cart', 'products', 'drawer'],
    },
    reducers
  );
  return persistedReducer;
};
