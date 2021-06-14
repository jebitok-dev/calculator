import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Homepage';
import Calculator from './Calculator';
import Navbar from './Navbar';
import Quote from './Quote';
import Error from './Error';

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Router;
