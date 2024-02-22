import { Fragment } from 'react'

import StoryHeader from './StoryHeader'

export default function SkillBricks({bricksHeader, bricksArr}) {
    return (
        <Fragment>
            <StoryHeader headerText={bricksHeader} />
            <div className="flex flex-wrap gap-1 px-4 w-96">
                {bricksArr.map((el) => (
                    <div
                        className="rounded border-2 border-slate-800 dark:border-white dark:bg-slate-400 bg-slate-300 p-0.5"
                        key={el}
                    >
                        {el}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
