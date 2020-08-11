import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';



import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'  
import reduxThunk from 'redux-thunk'

const store = createStore(
    reducers, //todos los reducers 
    {},//estado incial
    applyMiddleware(reduxThunk)

    )

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root')

);

