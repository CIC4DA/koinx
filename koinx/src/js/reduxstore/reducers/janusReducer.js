import {getInitialState} from "../reduxutils/initialStateUtil";
import produce from "immer";

const initialState = getInitialState();

const SolgressReduxState = (currentState = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }

    case 'INITIALIZE_STATE':
      return initialState;
      
    default:
      return {...currentState};
  }
}

export default SolgressReduxState;