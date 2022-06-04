import {combineReducers} from 'redux';
import Onboarding from '../screens/onboarding/reducer';

const appReducer = combineReducers({Onboarding});

const rootReducer = (state, action) => {
  return appReducer;
};

export default appReducer;
