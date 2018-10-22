import App from './App'
import ReactDOM from 'react-dom'
import React from 'react';
import getStore from './getStore';
import { Provider } from 'react-redux';

const store = getStore();

const fetchDataForLocation = location=>{
    store.dispatch({type:`REQUEST_FETCH_QUESTIONS`})
};
const render = (_App)=>{
    ReactDOM.render(
        <Provider store={store}>
            <_App />
        </Provider>,
        document.getElementById("AppContainer")
    )
};

if (module.hot) {
    module.hot.accept('./App',()=>{
        const NextApp = require('./App').default;
        render(NextApp);
    })
}

store.subscribe(()=>{
    const state = store.getState();
    if (state.questions.length > 0) {
        console.info("Mounting app");
        render(App);
    } else {
        console.info("App not yet mounting");
    }
});

fetchDataForLocation();