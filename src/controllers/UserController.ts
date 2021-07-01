import {USERLOADED} from '../globals/Type'
import STORE from '../store/store'


interface USERCHECKTYPE {
    name : String
}
export const USERDISPATCHER_STORE =  (args : USERCHECKTYPE ) => {
        STORE.dispatch({
            type: USERLOADED,
            payload: args.name
        });

}