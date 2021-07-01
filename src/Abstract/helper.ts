
export interface IGameCheck {
    Animals: [
        {
            AnimalType : String
            url : String
        }
    ],
    Loaded: Boolean,
    dispatch: Function,
    user: any
}

export interface IGAMEUSERTYPECHECK{
    GAME : {
        USER : {},
        Loaded: Boolean,
        userscores: Number
    },
    ANIMALS : {
        data : [{
            AnimalType : String
            url : String
        }]
    } 
}

export interface IAnimalsTypeCheckInterface {
  ANIMALS : {
    data : [{
        AnimalType : String
        url : String
    }]
  } 
}