import { Route, Switch } from 'react-router-dom';
import _LANDING_LAYOUT from '../components/Welcome/Landing';
import _ERROR_COMPONENT from '../components/Error/Error';

const NAVIGATORS_LINKS = [
    {
        path: '/',
        component: _LANDING_LAYOUT
    },
    {
        path: '*',
        component: _ERROR_COMPONENT
    }
]
const $ROUTING = () : JSX.Element  => {
    return (
        <Switch>
            {NAVIGATORS_LINKS.map((aRoute)=>{
                return <Route key={aRoute.path} exact path={aRoute.path} component={aRoute.component} />
            })}
        </Switch>
    );
};

export default $ROUTING;
  