import { Component } from 'react';
import './App.css'
import Menu from './components/Menu/Menu'
import routes from './routes'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <div className="container">
            <div className="row">
              <Switch>
                {this.showContentMenus(routes)}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
      if (routes.length > 0) {
        result = routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            ></Route>
          )
        })
      }
    return result;
  }
}

export default App;
