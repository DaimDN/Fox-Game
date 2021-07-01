import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import $ROUTING from './routes/Routing';
import STORE from './store/store';

const APP_FRAGMENT  = () : JSX.Element => {
    return (
      <React.Fragment>
      <Provider store={STORE}>
         <Router>
          <Switch>
            <Route exact component={$ROUTING} />
          </Switch>
      </Router>
      </Provider>
      </React.Fragment>
    )
}

export default APP_FRAGMENT;