import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorModal from './ErrorModal';

import { userActions } from '../actions';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false,
            error: false,
            errorMessage: ''
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

        var {username, password} = this.state.user;

        // Set the submitted state to true
        this.setState({submitted: true});

        // Need to validate
        if (username && password) {
            this.setState({
                error: false,
                errorMessage: ''
            });

            // By this time the user inputs have been validated
            // Now we need to see if it's saved in our database
            this.props.login(username, password);
        } else {
            this.setState({
                error: true,
                errorMessage: 'Invalid Username or Password'
            });
        }
    }

    render() {
        const { user, submitted, error, errorMessage } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>

                {error && <ErrorModal errorMessage={errorMessage}/>}

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
                        <Link to="/" className="btn btn-link">Cancel</Link>
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

// export { RegisterPage as TestRegisterPage };

export default connect(mapStateToProps, null)(RegisterPage);
