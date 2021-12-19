import React from 'react'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import App from './App'
import {store} from './store'

function index() {
    return (
        <div>
<Provider store={store}>
<App/>
</Provider>
        </div>
    )
}

export default index
