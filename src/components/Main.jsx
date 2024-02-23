import { useSelector } from 'react-redux'

import MainPart from './MainPart'
import ResumePart from './ResumePart'
import ContactsPart from './ContactsPart'

export default function Main() {
    const partsVisibility = useSelector(state=>state.navigator.partsVisibility) 

    return (
        <main className="w-full flex flex-col items-center max-w-screen-2xl px-4 md:px-6 xl:px-8 ">
            { partsVisibility.mainPart && <MainPart /> }
            { partsVisibility.resumePart && <ResumePart /> }
            { partsVisibility.contactsPart && <ContactsPart /> }
        </main>
    )
}
