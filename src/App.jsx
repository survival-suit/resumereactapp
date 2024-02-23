import { useContext } from 'react'

import Context from './context'

import './App.css'
import Navigator from './components/Navigator'
import Main from './components/Main'

export default function App() {
    const context = useContext(Context)
    return (
        //TODO разобраться с растяжением div на весь экран
        <div className={`${context.theme} `}>
            <div className="relative w-full flex flex-col pt-14 dark:bg-slate-800">
                <Navigator />
                <Main />
            </div>
        </div>
    )
}
