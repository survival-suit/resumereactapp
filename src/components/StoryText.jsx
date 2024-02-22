export default function StoryText({storyText}) {
    return (
        <div className="flex-1 w-96 font-bold text-sm text-gray-500 dark:text-gray-400 px-4">
            <span>{storyText}</span>
        </div>
    )
}
