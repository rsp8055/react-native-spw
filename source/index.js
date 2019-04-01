// Import required libraries for making use of component
import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';
import RouterComponent from './Router';

// Create a component
const App = () => {

    //This is the store we create with redux's createStore method
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

    return (

        <Provider store={store} >

            <RouterComponent />

        </Provider>

    );

};

export default App;