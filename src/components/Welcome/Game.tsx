import React from 'react'
import {Sheet, Wrapper,  InnerWrapper, DisplayStand, Margin4, Margin8, Heading, ImageSection, ScorePanel, TimerPanel, GameFlex} from './style'
import {connect} from 'react-redux'
import {ANIMALDISPATCHER_STORE} from '../../controllers/DispatcherController'
import Scoreboard from './Scoreboard'
import {USERSCORES} from '../../globals/Type'
import {IGameCheck, IGAMEUSERTYPECHECK, DataLoad} from '../../Abstract/helper'

const _GAME = ({ dispatch, Animals}: IGameCheck) : JSX.Element =>{

    const [counter, setCounter] = React.useState(30);
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        const timer : any =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter, Animals, score]);


      const CheckForFox =  (Object : DataLoad)   => {
          switch(Object.AnimalType){
              case 'fox':
                  StoreDataReLoader();
                  setScore(score + 1);
              break
              default: AddPenalty(); 
          }
      }

      function AddPenalty(){
          StoreDataReLoader();
          const TIMER_AT_CURRENT_POSITION  = counter;
          const ADD_PENALTY = TIMER_AT_CURRENT_POSITION - 1;
          setCounter(ADD_PENALTY);
                 
      }

      function StoreDataReLoader(){
          ANIMALDISPATCHER_STORE()
      }

      function ScoreBoardUpdateGameComponent(){
          setScore(0);
          setCounter(30);
      }

      if(counter > 0){
        return (
            <React.Fragment>
              <Sheet>
                <Wrapper >
                 <InnerWrapper className="h-96">
                    <Margin4>
                   <Heading>Click the Fox! Game</Heading>
                    </Margin4>
                    <Margin8>                
                    <GameFlex> 
                    <ScorePanel> Score : {score}</ScorePanel>
                    <TimerPanel> Time Left: 00:{counter}</TimerPanel>
                    </GameFlex>
                    </Margin8>
                    <DisplayStand>
                    {Animals?.map((anAnimal: any, index: any)=>{
                        return <div key={index}>
                            <ImageSection   onClick={()=>{CheckForFox(anAnimal)}}>
                            <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={anAnimal?.url} alt="" />
                           </ImageSection>
                        </div>
                    })}
                    </DisplayStand>
                 </InnerWrapper> 
                </Wrapper>    
                </Sheet>
            </React.Fragment>
        )
      }
      else{
            dispatch({
                type: USERSCORES,
                payload: score
            })
            return <Scoreboard handler={ScoreBoardUpdateGameComponent} />
      }   
}

const mapStateToProps = (state : IGAMEUSERTYPECHECK) => (
    {
    user : state.GAME.USER,
    Loaded: state.GAME.Loaded,
    Animals : state.ANIMALS.data,

    }
);


export default connect(mapStateToProps)(_GAME);

