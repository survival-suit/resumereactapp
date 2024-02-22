import storyTexts from '../json/storyTexts.json'

import TitledAvatar from './TitledAvatar'
import Hr from './Hr'
import StoryText from './StoryText'
import StoryHeader from './StoryHeader'



export default function MainPart() {
    
    
    return (
        <div className="flex flex-col">
            <TitledAvatar />
            <br />
            <Hr wSize={'w-full'} />
            <br />
            <div className="flex flex-col">
                <StoryHeader headerText={'Обо мне'} />                
                <StoryText storyText={storyTexts.mainPart} /> 
                <br />
                <StoryHeader headerText={'Цели и пожелания'} />                
                <StoryText storyText={storyTexts.wishes} />          
            </div>
            <br />
            <Hr wSize={'w-full'} />
            <br />          
        </div>
    )
}
