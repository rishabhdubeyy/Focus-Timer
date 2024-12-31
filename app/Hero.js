"use client"

import {useEffect, useRef, useState} from 'react';
import {Button} from "@/components/ui/button";

export default function Hero() {

    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    const initialTime = useRef(0);
    const intervalId = useRef(null);

    useEffect(Timer, [start]);

    function Timer () {
        if (start) {
            intervalId.current = setInterval(() => {
                setTime(Date.now() - initialTime.current);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId.current);
        }
    }

    function watch () {
        const seconds = String(Math.floor(time / (1000) % 60)).padStart(2, '0');
        const minutes = String(Math.floor(time / (1000 * 60) % 60)).padStart(2, '0');
        const hours = String(Math.floor(time / (1000 * 60 * 60))).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }

    function begin () {
        setStart(true);
        initialTime.current = Date.now() - time;
    }

    function pause () {
        setStart(false);
    }

    function restart () {
        setTime(0)
        setStart(false);
    }


    return (
        <div>
            <div className="flex-col justify-center items-center shadow-lg rounded-3xl w-[500px] h-[300px]">
                <div className="flex items-center justify-center pt-7">
                    <h1 className="font-semibold text-xl">Focus Timer</h1>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-neutral-400">It will help you track your focus time</p>
                </div>
                <div className="flex justify-center items-center pt-10">
                    <h1 className="text-5xl font-semibold">{watch()}</h1>
                </div>
                <div className="flex items-center justify-center pt-10 gap-2">
                    <Button onClick={begin}>Start</Button>
                    <Button variant="secondary" onClick={pause}>Pause</Button>
                    <Button variant="destructive" onClick={restart}>Reset</Button>
                </div>
            </div>
        </div>
    )
}