import {getInitialState} from "../utils/reduxUtil";

export const solgressAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const initializeReduxState = () => dispatch => {
    dispatch({
        type: 'INITIALIZE_STATE',
        payload: getInitialState()
    })
}