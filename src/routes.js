import {
  BrowserRouter as Router, Route, Switch, 
} from 'react-router-dom';

import ptBR from './portuguese';

const Routes = () => (
    <Router>
        <Switch>

            <Route path="/br" component={ptBR} />

        </Switch>
    </Router>
);

export default Routes;