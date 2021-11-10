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
       
            <Route path="/br" exact component={ptBR} />
            <Route path="/en"exact component={enUS} />
            <Route path="/es" exact component={esPN} />
            <Route component={ptBR} />
        </Switch>
    </Router>
);

export default Routes;