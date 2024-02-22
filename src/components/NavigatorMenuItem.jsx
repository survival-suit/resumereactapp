import { useDispatch } from 'react-redux'

import { setPartsVisibility } from '../store/navigatorSlice'

export default function NavigatorMenuItem({ menuName, menuNameEng }) {
    const dispatcher = useDispatch()
    return (
        <button
            onClick={ () => dispatcher(setPartsVisibility(menuNameEng)) }
            className="hover:bg-slate-400 hover:dark:bg-slate-700 font-bold py-1 px-3 rounded-full"
        >
            <span className="font-bold dark:text-white text-gray-800 ">
                {menuName}
            </span>
        </button>
    )
}
