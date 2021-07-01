import  { useReducer } from 'react';
import  {USERLOADED, GAMELOADED, USERSCORES, ERROR} from '../globals/Type'
import { cleanup} from '@testing-library/react';
import {INITIALSTATE} from '../Reducers/Game.reducer'

const  ASSUMED_INITIALSTATE = {
    USER : '', 
    Loaded: false,
    userscores: 0
};

const GameReducer =  function (state = INITIALSTATE, action : any) {
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
afterEach(cleanup)

var MockIntialUserDetails = {"Loaded": false, "USER": "", "userscores": 0,}
const ASSUMED_UPDATED = {"Loaded": true, "USER": "daim", "userscores": 27,}


describe('Initial State of Must Match', () => {
    it('must match the ASSUMED_INTIALSTATE', () => {
        expect(INITIALSTATE).toEqual(ASSUMED_INITIALSTATE);
    });

    
    it('should return the intial Reduced state of store', () => {
        expect(GameReducer(ASSUMED_INITIALSTATE, USERLOADED)).toEqual(MockIntialUserDetails)
      })

      it('should return the updateds Reduced state of store', () => {
        expect(GameReducer(ASSUMED_UPDATED, USERLOADED)).toEqual(ASSUMED_UPDATED)
      })

    
});