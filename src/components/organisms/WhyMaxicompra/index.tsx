"use client";

import { useEffect, useRef, useState } from "react";

type WhyMaxicomraProps = {
    phrases: string[];
};

export default function WhyMaxicomra({ phrases }: WhyMaxicomraProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <div
            ref={containerRef}
            className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center font-medium mt-2"
        >
            <span className="font-bold">¿Por qué MaxiCompra?</span>
            <span className="font-normal">{phrases[index]}</span>
        </div>
    );
}
