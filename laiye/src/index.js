import "babel-polyfill"
import React from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore.dev';
import rootSaga from './sagas';
// import RepoPage from './containers/RepoPage';
import App from './containers/App';
// import Rou from './routes/route-test.jsx';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({});
store.runSaga(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
