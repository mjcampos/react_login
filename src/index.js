import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import App from './App';

import { configureFakeAPI } from './helpers';

// console.log(store.getState());
store.subscribe(() => console.log('store', store.getState()));

configureFakeAPI();

render(
		<Provider store={store}>
			<Router>
				<Route path="/" component={App}/>
			</Router>
		</Provider>,
    document.getElementById('app')
);
