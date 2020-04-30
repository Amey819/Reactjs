import { SET_ALERT , REMOVE_ALERT} from "../reducers/types"
import {v4 as uuid} from 'uuid';
// import set_alert and remove_alert
// this action is called by the component and dispatches the reducer 
export const setAlert = (msg,alert_Type) => dispatch =>
{
    const id = uuid();
    dispatch(
        {
            type: SET_ALERT,
            payload: {msg,alert_Type,id}
        }
    );
    setTimeout(() =>dispatch(
        {
            type:REMOVE_ALERT,
            payload:id
        }
    ),5000)
};



