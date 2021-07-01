import {GET_ANIMALS, ERROR} from '../globals/Type'
const INITIALSTATE = {
        data : []
  };
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIALSTATE, action : any) {
    const { type, payload } = action;
    switch (type) {
        case GET_ANIMALS:
            return {
                ...state,
                data : [...payload]
            };  
        case ERROR:
            return {
                ...state,
                ERROR: 'error occured'
            }  ;        
        default:
        return state;
    }
}