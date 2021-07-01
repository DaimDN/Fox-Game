import {USERLOADED, ERROR, GAMELOADED, USERSCORES} from '../globals/Type'


const INITIALSTATE = {
        USER : '', 
        Loaded: false,
        userscores: 0
  };
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIALSTATE, action : any) {
    const { type, payload } = action;
    switch (type) {
        case USERLOADED:
            return {
                ...state,
                USER : {name : payload}
            }; 
            
        case GAMELOADED : 
        return {
            ...state,
            Loaded: payload

        };
        case USERSCORES :
            return {
                ...state,
                userscores : payload
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