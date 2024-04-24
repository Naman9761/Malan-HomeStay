'use client';
import { useEffect } from "react";
import CountUp from 'react-countup';
import WOW from 'wowjs';

export default function Counter() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);

    const counterData = [
        {
            "id": 1,
            "countup": {
                "start": 0,
                "end": 3,
            },
            "text": 'Years Of Experience',
            animationDelay: '1s'
        },
        {
            "id": 3,
            "countup": {
                "start": 0,
                "end": 10,
            },
            "text": 'Happy Clients',
            animationDelay: '1s'
        }
    ];

    return (
        <div className="container xl:max-w-4xl mx-auto px-4 py-8 lg:px-3 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x dark:divide-gray-700/75">
                {counterData.map((element) => (
                    <dl key={element.id} className="space-y-1 px-5 py-10 wow animate__animated animate__zoomIn" data-wow-delay={element.animationDelay}>
                        <CountUp start={element.countup.start}
                            end={element.countup.end} duration={5} suffix="+" className="text-4xl font-extrabold text-black dark:text-white" />

                        <dd className="text-md uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500" style={{ marginLeft: "10px", marginRight: "2px" }}>
                            {element.text}
                        </dd>
                    </dl>
                ))}
            </div>
        </div>
    );
}
