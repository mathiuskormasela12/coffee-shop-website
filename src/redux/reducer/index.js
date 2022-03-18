// ========== Root Reducer
// import all modules
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

// import all reducers
import authReducer from './auth';
import dataReducer from './data';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['data'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  data: dataReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
