import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import App from './App';

import { configureFakeAPI } from './helpers';

console.log(store.getState());
store.subscribe(() => console.log('store', store.getState()));

configureFakeAPI();

render(
		<Provider store={store}>
        	<App />
		</Provider>,
    document.getElementById('app')
);
