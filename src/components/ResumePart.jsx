import storyTexts from '../json/storyTexts.json'

import Hr from './Hr'
import StoryText from './StoryText'
import StoryHeader from './StoryHeader'
import SkillBricks from './SkillBricks'

export default function ResumePart() {
    const allSkills = [
        {
            bricksHeader: 'Языки программирования',
            bricksArr: ['C++', 'Java', 'JavaScript', 'Python'],
        },
        {
            bricksHeader: 'Базы данных',
            bricksArr: [
                'Oracle',
                'PL/SQL',
                'PostgreSQL',
                'SQL',
                'SQLite',
                'SQLAlchemy',
            ],
        },
        {
            bricksHeader: 'Другое',
            bricksArr: [
                'Docker',
                'Git',
                'Swagger',
                'SVN',
                'Apache Tomcat',
                'IIS',
                'LeafletJS',
                'OpenStreetMap',
                'Hibernate',
            ],
        },
        {
            bricksHeader: 'Web/React',
            bricksArr: [
                'JavaScript',
                'HTML',
                'CSS',
                'React',
                'Redux',
                'Redux Toolkit',
                'Redux Persist',
                'Tailwind',
            ],
        },
    ]

    return (
        <div className="flex flex-col">
            <Hr wSize={'w-full'} />
            <br />
            <StoryHeader headerText={'Работа/удаленная работа (2016-п.н.в)'} />
            <StoryHeader headerText={'ООО НТП "СЕВАВТОТРАНС"'} />
            <StoryText storyText={storyTexts.storyTextJob} />
            <br />
            <StoryText storyText={storyTexts.storyTextExperience} />
            <br />
            {allSkills.map((el) => (
                <SkillBricks
                    bricksHeader={el.bricksHeader}
                    bricksArr={el.bricksArr}
                    key={el.bricksHeader}
                />
            ))}
            <br />
            <Hr wSize={'w-full'} />
            <br />
            <StoryHeader headerText={'Высшее образование (2009-2015)'} />
            <StoryHeader
                headerText={'Череповецкий государственный университет'}
            />
            <StoryText storyText={storyTexts.storyTextEducation} />
            <br />
            <Hr wSize={'w-full'} />
            <br />
        </div>
    )
}
