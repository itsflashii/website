import {
  BrowserRouter as Router, Route, Switch, Redirect 
} from 'react-router-dom';

import ptBR from './portuguese';
import enUS from './english';
import esPN from './spanish';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/br" />
            </Route>
            <Route path="*" component={ptBR} status={404}/>
            <Route path="/br" component={ptBR} />
            <Route path="/en" component={enUS} />
            <Route path="/es" component={esPN} />
        </Switch>
    </Router>
);

export default Routes;