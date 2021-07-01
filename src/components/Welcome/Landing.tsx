import React from 'react'
import {ANIMALDISPATCHER_STORE} from '../../controllers/DispatcherController'
import { connect } from 'react-redux';
import WELCOME from './welcome';
import {Stand} from './style'
import {IAnimalsTypeCheckInterface} from '../../Abstract/helper'

const _LANDING_LAYOUT  = ({RandomAnimals}: any) : JSX.Element => {
    React.useEffect(()=>{
        storePusher();
    },[])
     function storePusher(){
       ANIMALDISPATCHER_STORE()
    }
    return (
        <React.Fragment>
            <Stand>
            <WELCOME  />
            </Stand>         
        </React.Fragment>
    )
}

const mapStateToProps = (state : IAnimalsTypeCheckInterface) => ({
    RandomAnimals: state.ANIMALS.data
});
export default connect(mapStateToProps)(_LANDING_LAYOUT);