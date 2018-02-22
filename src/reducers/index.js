import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nState } from 'redux-i18n';

import auth from './authReducer';

const rootReducer = combineReducers({
  auth,
  routing: routerReducer,
  i18nState
});

export default rootReducer;
