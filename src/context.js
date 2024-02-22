import React from 'react'

const navigatorMenuItems = {
    main : { menuName: 'Главная', menuNameEng: 'mainPart', visible: true, key: 0 },
    resume : { menuName: 'Резюме', menuNameEng: 'resumePart', visible: false, key: 1 },
    contacts : { menuName: 'Контакты', menuNameEng: 'contactsPart',visible: false, key: 2 },
}

const context = {
    theme : 'light',
    navigatorMenuItems
}



const Context = React.createContext(context)
export default Context
