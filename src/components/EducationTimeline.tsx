import React from "react"

export function EducationTimeline({ timelineData }) {

    return ( <>
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical p-12 bg-slate-800 m-5 rounded-xl lg:w-1/2">
        <h1 className="font-bold text-5xl text-left mb-5">Education</h1>
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
                    d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 text-start">
                <time className="font-mono italic">
                    {data.startDate} - {data.endDate}
                </time>
                <div className="text-lg font-black text-pink-500">{data.name}</div>
                <div className="text-lg font-black">{data.title}</div>
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
                    d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 text-start">
                <time className="font-mono italic">
                    {data.startDate} - {data.endDate}
                </time>
                <div className="text-lg font-black text-pink-500">{data.name}</div>
                <div className="text-lg font-black">{data.title}</div>
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
    </> )
}