import { INPUT_SEARCHTEXT } from '../actions';

const searchText = (state=[], action) => {
  switch (action.type) {
    case INPUT_SEARCHTEXT:
      state = action.searchText;
      return state;
    default:
      return state;
  }
}

export default searchText