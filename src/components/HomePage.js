import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userActions} from '../actions';

class HomePage extends Component {
    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 align="center">Welcome! You have successfully logged in.</h2>

                <button align="center" onClick={() => this.logout()}>Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, userActions)(HomePage);