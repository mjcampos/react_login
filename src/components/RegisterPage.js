import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AlertModal from './AlertModal';

import { userActions } from '../actions';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, name) {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: e
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault();

        var {user} = this.state;

        // Set the submitted state to true
        this.setState({submitted: true});

        // Need to validate
        if (user.username && user.password) {
            // Save to our local database
            this.props.register(user);
        }
    }

    render() {
        const { user, submitted } = this.state;
        var {alert} = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>

                {alert && <AlertModal alertMessage={alert.message}/>}

                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control username" name="username" onChange={e => this.handleChange(e.target.value, e.target.name)} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={e => this.handleChange(e.target.value, e.target.name)}/>
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

// complete the below function
function mapStateToProps(state) {
    return state;
}

export { RegisterPage as TestRegisterPage };

export default connect(mapStateToProps, userActions)(RegisterPage);
