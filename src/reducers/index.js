import { combineReducers } from 'redux';
import todos from './todos';
import searchText from './searchText';

export default combineReducers({ todos, searchText })