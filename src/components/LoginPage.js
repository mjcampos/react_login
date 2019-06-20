import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AlertModal from './AlertModal';

import { userActions } from '../actions';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            username: '',
            password: '',
            submitted: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        var {username, password} = this.state;

        // Set the submitted state to true
        this.setState({submitted: true});

        // Need to validate
        if (username && password) {
            // Saved to our database
            this.props.login(username, password);
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        var {alert} = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>

                {alert && <AlertModal alertMessage={alert.message}/>}

                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control username" name="username" onChange={e => this.setState({username: e.target.value})} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={e => this.setState({password: e.target.value})}/>
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" >Login</button>
                        <Link to="/register" className="btn btn-danger" >Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export { LoginPage as TestLoginPage };

export default connect(mapStateToProps, userActions)(LoginPage);