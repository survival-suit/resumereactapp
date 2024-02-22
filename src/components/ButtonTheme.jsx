import { useSelector, useDispatch } from 'react-redux'

import { setTheme } from '../store/settingsSlice'

export default function ButtonTheme() {
    const theme = useSelector((state) => state.settings.theme)
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(setTheme(theme ==='dark' ? 'light' : 'dark' ))} 
            type='button' 
            className="w-10 h-10 p-1 rounded-md hover:text-slate-400 hover:dark:text-slate-400 dark:text-white text-slate-700 transition"
        >
            <svg
                className="hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
            <svg
                className="block dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
            <span className="sr-only">Переключатель темной и светлой темы</span>
        </button>
    )
}
