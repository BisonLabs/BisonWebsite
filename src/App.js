import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page_01_Home from './pages/Home/Home';
import Page_02_Ecosystem from './pages/Ecosystem/Ecosystem';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/Home']} component={Page_01_Home} />
        <Route exact path="/Ecosystem" component={Page_02_Ecosystem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;