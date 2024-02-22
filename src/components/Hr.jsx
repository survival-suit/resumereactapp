export default function Hr({wSize}) {
    return (
        <div className="inline-flex items-center justify-center w-full">
            <hr className={`${wSize} h-1 rounded bg-gray-700 dark:bg-gray-400`} />
        </div>
    )
}