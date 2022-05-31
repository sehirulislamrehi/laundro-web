
import { combineReducers } from 'redux';
import getAllServices from './getAllServices';
import getAllArea from './getAllArea';

const allReducer = combineReducers({
     getAllServices : getAllServices,
     getAllArea : getAllArea,
})

export default allReducer;