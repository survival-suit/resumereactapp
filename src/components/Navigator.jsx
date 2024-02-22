import { useContext } from 'react'

import Context from '../context'

import ButtonTheme from './ButtonTheme'
import NavigatorMenuItem from './NavigatorMenuItem'


export default function Navigator() {
    const context = useContext(Context)
    const navigatorMenuItems = [...Object.values(context.navigatorMenuItems) ]

    return (
        <nav className="fixed z-50 flex flex-col items-center h-14 top-0 left-0 right-0 w-full bg-white dark:bg-slate-800">
            <div className="flex justify-between w-full md:px-6 xl:px-8">
                <div className="flex items-center gap-6">
                    {navigatorMenuItems.map((el) => (
                        <NavigatorMenuItem
                            menuName={el.menuName}
                            menuNameEng={el.menuNameEng}
                            key={el.key}
                        />
                    ))}
                </div>
                <div>
                    <ButtonTheme />
                </div>
            </div>
        </nav>
    )
}
