import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
// import { alertActions } from './actions';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
        });
    }

    render() {
        var loggedIn = this.props.authentication.loggedIn;
        var registration = this.props.registration;

        return (
              <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                               <Route path="/" exact render={() => (
                                 localStorage.getItem('user') ? (<HomePage/>) : (<Redirect to="/login"/>))}/>
                               <Route path="/login" exact render={() => (
                                 !localStorage.getItem('user') ? (<LoginPage/>) : (<Redirect to="/"/>))}/>
                               <Route path="/register" exact render={() => (
                                   registration.user ? (<Redirect to="/login"/>) : (<RegisterPage/>)
                                 )}/>
                  </div>
              </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App);