import React from 'react'
import {Sheet, Wrapper, HeadingContent, InnerWrapper,ScoreBoardFlex, ScoreBoardButton, Margin4, Margin8, Heading, Flex} from './style'
import {connect} from 'react-redux'
import {IGAMEUSERTYPECHECK, IScoreboardPropsChecker} from '../../Abstract/helper'



const _Scoreboard  = ({ user, scores, handler}: IScoreboardPropsChecker) : JSX.Element => {

    const [allPlayer, setallPlayers] : any = React.useState(undefined);

    React.useEffect(()=>{
        getUserObjectandStore();
        sortedAlgorithm();
    }, [])
 

    function sortedAlgorithm(){
        var Players : any = localStorage.getItem('players');
        if(Players !== null){
            Players = JSON.parse(Players);
            Players = Players.reverse();

            var temparray: any = [];
            
            for(var a =0; a < 8; a++){
                var object = {'username': '', scores: '', date : ''};
                temparray.push(object);
            }
            temparray = [...Players, ...temparray];
            temparray = temparray.slice(0, 7);
            setallPlayers(temparray)
        }   
    }

    function getUserObjectandStore(){
        var username = user?.name;
        var obj = {username, scores, date: ''};
        const DATE : Date = new Date();
        var month: any = DATE.toLocaleString('default', { month: 'long' });
        var year = DATE.getFullYear();
        var date = DATE.getDate();
        const DATE_FORMATTED = `${year},${month} ${date}`;
        obj.date = DATE_FORMATTED.toString();
        var array: any = [obj];

        const CHECKSTORAGE = localStorage.getItem('players');
        
        if(CHECKSTORAGE === null){
            var StringifiedPlayer = JSON.stringify(array);
            localStorage.setItem('players', StringifiedPlayer);

        }else{
            var ParsedStorage = JSON.parse(CHECKSTORAGE);
            if(ParsedStorage.length > 7){
                var arrayToParseObject: any = [...ParsedStorage, obj];
                arrayToParseObject = arrayToParseObject.sort((a: any, b: any)=> {return a.scores - b.scores});
                var parsedAgain : any = JSON.stringify(arrayToParseObject);
                localStorage.setItem('players', parsedAgain);
            }else{
                var arrayBucketLessthan7: any = [...ParsedStorage, obj];
                arrayBucketLessthan7 = arrayBucketLessthan7.sort((a: any, b: any)=> {return a.scores - b.scores});
                var parsedLessthan7 : any = JSON.stringify(arrayBucketLessthan7);
                localStorage.setItem('players', parsedLessthan7);
            }
        }
    }

    function RedirectToHomepage(){
        window.location.href = '/';
    }

    return (
        <React.Fragment>
            <Sheet>
            <Wrapper>
             <InnerWrapper>
                <Margin4>
               <Heading>Click the Fox! Game</Heading>
                </Margin4>
                <Margin8> 
                <HeadingContent> ScoreBoard </HeadingContent>               
                <Flex> 
                </Flex>
                </Margin8>
                <div className=" w-full -mt-9">
          <div className="shadow overflow-hidden rounded border-b border-gray-100">
              <table className=" w-96 bg-white">
            <thead className="bg-gray-400 text-white">
              <tr className="border-gray-400">
                <th className=" text-center  uppercase py-1 px-1 border-gray-100 font-semibold text-sm">Rank</th>
                <th className="w-1/3 text-center py-1 border-gray-400  px-2 uppercase font-semibold text-sm">Name</th>
                <th className="text-center py-1 px-4 border-gray-400 uppercase font-semibold text-sm">Date</th>
                <th className="text-center py-1 px-4 border-gray-400 uppercase font-semibold text-sm">Score
                </th></tr>
            </thead>
            <tbody className="text-gray-700">
                {allPlayer !== undefined && <React.Fragment>
                 {allPlayer.map((anItem : any, index: any)=>{
                     return <tr key={index} >
                        <td className=" text-center font-bold border-b border-gray-100 text-left text-white text-sm bg-gray-400 py-1 px-1">{index + 1}</td>
                        <td className="  text-center font-bold border-b border-gray-400 text-sm text-left py-1 px-2">{anItem?.username}</td>
                        <td className=" text-center font-bold border-b border-gray-400 text-left text-sm py-1 px-4"><a className="hover:text-blue-500">{anItem?.date}</a></td>
                        <td className="text-center font-bold border-b border-gray-400 text-left text-sm py-1 px-4"><a className="hover:text-blue-500" >{anItem?.scores}</a></td>
                    </tr>
                 })}   
                </React.Fragment> }                           
            </tbody>
          </table>
        </div>
      </div>
      <ScoreBoardFlex>
         <ScoreBoardButton onClick={()=>{RedirectToHomepage()}} >To Weclome Screen</ScoreBoardButton>
         <ScoreBoardButton onClick={()=>{handler()}}>PLAY!</ScoreBoardButton>
        </ScoreBoardFlex>
     
             </InnerWrapper>          
            </Wrapper>    
            </Sheet>
        </React.Fragment>
    )
}

const mapStateToProps = (state : IGAMEUSERTYPECHECK) => (
    {
    user : state.GAME.USER,
    scores: state.GAME.userscores

    }
    
);
export default connect(mapStateToProps)(_Scoreboard);
