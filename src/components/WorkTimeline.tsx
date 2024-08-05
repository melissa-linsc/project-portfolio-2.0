import React from "react"

export function WorkTimeline({ timelineData }) {

    return (
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical p-12  bg-slate-800 m-5 rounded-xl lg:w-1/2">
            <h1 className="font-bold text-5xl text-left mb-5">Professional</h1>
            {timelineData.map((data, index) => (
        <li key={index}>
            {index === 0 ? (
            <>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 3 20 20"
                    fill="#89CFF0"
                    className="h-5 w-10"
                >
                    <path
                    fillRule="evenodd"
                    d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 text-start">
                <time className="font-mono italic">
                    {data.startDate} - {data.endDate}
                </time>
                <div className="text-lg font-black text-pink-500">{data.name}</div>
                <div className="text-lg font-black text-secondary">{data.title}</div>
                {data.description}
                <br />
                <span className="text-secondary">{data.results}</span>
                </div>
                <hr className="bg-primary" />
            </>
            ) : (
            <>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 3 20 20"
                    fill="#89CFF0"
                    className="h-5 w-10"
                >
                    <path
                    fillRule="evenodd"
                    d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 text-start">
                <time className="font-mono italic">
                    {data.startDate} - {data.endDate}
                </time>
                <div className="text-lg font-black text-pink-500">{data.name}</div>
                <div className="text-lg font-black text-secondary">{data.title}</div>
                {data.description}
                <br />
                <span className="text-secondary">{data.results}</span>
                </div>
                <hr className="bg-primary" />
            </>
            )}
        </li>
        ))}
    </ul>
    )
}