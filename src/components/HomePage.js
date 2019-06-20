import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userActions} from '../actions';

class HomePage extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 align="center">Welcome! You have successfully logged in.</h2>

                <Link align="center" to='/login' onClick={() => this.props.logout()}>Logout</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, userActions)(HomePage);