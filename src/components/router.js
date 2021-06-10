import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './homepage';
import Calculator from './calculator';
import Navbar from './navbar';
import Quote from './quote';

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Router;
