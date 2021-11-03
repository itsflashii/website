import {
  BrowserRouter as Router, Route, Switch, Redirect 
} from 'react-router-dom';

import ptBR from './portuguese';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/br" />
            </Route>

            <Route path="/br" component={ptBR} />

        </Switch>
    </Router>
);

export default Routes;