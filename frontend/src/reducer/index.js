
import { combineReducers } from 'redux';
import getAllServices from './getAllServices';

const allReducer = combineReducers({
     getAllServices : getAllServices,
})

export default allReducer;