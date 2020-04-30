import {SET_ALERT, REMOVE_ALERT} from './types';


const initialState = [];


// this reducer is created for the alerts and  how state changes when alert is triggered
// initial state is the state the first time component is rendered, action is something that changes the state
export default function(state = initialState,action)
{
    switch(action.type)
    {
        case SET_ALERT:
            return[...state, action.payload];
        case REMOVE_ALERT :
            return state.filter(alert => alert.id !== action.payload);  // returns all alerts except the one selected
        default:
            return state;
    }
}