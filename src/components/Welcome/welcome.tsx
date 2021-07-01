import React from 'react';
import {connect} from 'react-redux'
import {GAMELOADED, USERLOADED} from '../../globals/Type';
import {Sheet, Wrapper, ButtonSelected, HeadingContent, InnerWrapper, CenterFlex, ButtonFav, Margin4, Margin8, Heading, Flex, Heading2} from './style'
import GAME from './Game';


const _WELCOME = ({user, dispatch, Loaded}: any) : JSX.Element => {
    const [name, setName] = React.useState('');
    const formHandler = (e: any) => {
        e.preventDefault();
        const dataset = e.target.value;
        setName(dataset);        
    }
    const submitHandler = () => {
        if(name !== ''){
            dispatch({
                type: USERLOADED,
                payload : name
            })
        }
        else{
            alert('Enter name')            
        }
    }
    const ProceedHandler = () => {
     dispatch({
        type: GAMELOADED,
        payload: true
     })
    }
    if(Loaded !== true){
        return(
            <React.Fragment>
            <Sheet>
            <Wrapper>
             <InnerWrapper>
                <Margin4>
               <Heading>Click the Fox! Game</Heading>
                </Margin4>
                <Margin8>                
                <Flex> 
                    {user === '' ? 
                    <React.Fragment>
                    <Heading2>Name:</Heading2> 
                    <input onChange={formHandler} className="shadow appearance-none border-2 border-yellow-400 rounded w-full py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none " required />
                    </React.Fragment>
                    : 
                    <React.Fragment>    
                   <HeadingContent> Hello {user?.name} </HeadingContent>
                   </React.Fragment>}
                </Flex>
                </Margin8>
                <CenterFlex>  
                {user === '' ? 
                    <React.Fragment>
                    <ButtonFav onClick={()=>{submitHandler()}}>Play!</ButtonFav>
                    </React.Fragment>
                    : 
                    <React.Fragment>    
                   <ButtonSelected onClick={()=>{ProceedHandler()}}>Play!</ButtonSelected>
                   </React.Fragment>}
                </CenterFlex>
             </InnerWrapper>          
            </Wrapper>    
            </Sheet>
            </React.Fragment>
        )
    }
    else{
        return (
             <GAME/>
        )
    }
   
}

interface GAMEUSERTYPECHECK{
    GAME : {
        USER : {},
        Loaded: Boolean
  }
}
const mapStateToProps = (state : GAMEUSERTYPECHECK) => ({
    user : state.GAME.USER,
    Loaded: state.GAME.Loaded
});
export default connect(mapStateToProps)(_WELCOME);