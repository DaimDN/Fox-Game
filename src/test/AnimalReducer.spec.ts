
import  {GET_ANIMALS, ERROR} from '../globals/Type'
import { cleanup} from '@testing-library/react';
import {INITIALSTATE} from '../Reducers/Animal.reducers'


const ASSUMED_ANIMALINITIALSTATE  = {
  data : []
};

  const AnimalReducer =  function (state = ASSUMED_ANIMALINITIALSTATE, action : any) : any {
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

  var MockDataAnimals = {"data": []};

  const updatedAnimals = {"data" : [{url: '', name: ''}]};

  afterEach(cleanup)
  describe('test the Intial State of Reducers', () => {
    it('should return the initial state', () => {
      expect(INITIALSTATE).toEqual(ASSUMED_ANIMALINITIALSTATE);
    })

    it('should return the Reduced state', () => {
      expect(AnimalReducer(ASSUMED_ANIMALINITIALSTATE, GET_ANIMALS)).toEqual(MockDataAnimals)
    })

    it('should return the updated Reduced state', () => {
      expect(AnimalReducer(updatedAnimals, GET_ANIMALS)).toEqual(updatedAnimals)
    })

  })
  
  