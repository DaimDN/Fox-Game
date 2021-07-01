import {GET_ANIMALS, ERROR} from '../globals/Type'
import DATA_GENERATOR from '../util/dataGenerator';
import STORE from '../store/store'

export const ANIMALDISPATCHER_STORE = async (): Promise<void> => {
    try {
        let randomizedFields = await DATA_GENERATOR.$DataGenerator();
        STORE.dispatch({
            type: GET_ANIMALS,
            payload: randomizedFields
        });
    } catch (error) {
        STORE.dispatch({
            type: ERROR
        })
        
    }
}

