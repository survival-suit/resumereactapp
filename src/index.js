import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useSelector } from 'react-redux'

import './index.css'
import App from './App'
import store, { persistor } from './store'
import Context from './context'

function Main() {
    const theme = useSelector((state) => state.settings.theme)
    const context = useContext(Context)
    context.theme = theme
    return (
        <Context.Provider value={context}>
            <App />
        </Context.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    //<React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Main />
        </PersistGate>
    </Provider>
    //</React.StrictMode>
)
