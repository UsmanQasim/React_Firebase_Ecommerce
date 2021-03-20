import '../styles/App.css';
import LoginL from './LoginLayout';
import SignupL from './SignupLayout';
import PageNotFound from './PageNotFound';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginL} exact={true} />
        <Route path="/" component={SignupL} exact={true} />
        <Route component={PageNotFound} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
