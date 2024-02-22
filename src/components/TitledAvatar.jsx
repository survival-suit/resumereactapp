import { useContext } from 'react'
import { FaTelegram, FaYandex } from 'react-icons/fa'

import storyTexts from '../json/storyTexts.json'
import Context from '../context'

import StoryText from './StoryText'
import StoryHeader from './StoryHeader'

export default function TitledAvatar() {
    const context = useContext(Context)
    const storyText = storyTexts.titledAvatar
    const size = '20px'
    const color = context.theme === 'dark' ? 'white' : 'rgb(30 41 59)'
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="p-1">
                <img
                    className="rounded-full w-40 h-40 ring-4 ring-gray-300 dark:ring-gray-500"
                    src="https://avatars.githubusercontent.com/u/30926674?v=4"
                    alt="Large avatar"
                />
            </div>
            <div>
                <StoryHeader headerText={'Привет!'} />
                <StoryText storyText={storyText} />
            </div>
            <div className="flex-1 w-96 px-4">
                <div className="flex flex-row">
                    <a
                        title="Yandex"
                        href="mailto:survivalsuit@yandex.ru"
                        target="_blanc"
                        className="flex flex-row"
                    >
                        <FaYandex size={size} color={color} />
                        <span className="font-bold dark:text-white px-4">
                            survivalsuit@yandex.ru
                        </span>
                    </a>
                </div>
                <div className="flex flex-row">
                    <a
                        title="Telegram"
                        href="https://t.me/survival_suit"
                        target="_blanc"
                        className="flex flex-row"
                    >
                        <FaTelegram size={size} color={color} />
                        <span className="font-bold dark:text-white px-4">
                            @survival_suit
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
