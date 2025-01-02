"use client"

import {useEffect, useRef, useState} from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Snowfall} from "react-snowfall";
import Social from "@/app/social";

export default function Hero() {

    const [start, setStart] = useState(false);
    const [work, setWork ] = useState(false);
    const [sbreak, setSbreak ] = useState(false);
    const [lbreak, setLbreak ] = useState(false);
    const [time, setTime] = useState(1500);
    const [initialTime, setInitialTime] = useState(1500);
    const intervalId = useRef(null);

    useEffect(Timer, [start, time]);

    function Timer () {
        if (start) {
            if (time>0){
                intervalId.current = setInterval(() => {
                    setTime(time - 1);
                }, 1000);
            } else {
                setStart(false);
            }
        }
        return () => {
            clearInterval(intervalId.current);
        }
    }

    function watch () {
        const seconds = String(Math.floor(time % 60)).padStart(2, '0');
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');

        return `${minutes}:${seconds}`;
    }

    function begin () {
        setStart(true);
    }

    function pause () {
        setStart(false);
    }

    function restart () {
        setTime(initialTime);
        setStart(false);
    }

    function setWorkState() {
        setWork(true);
        setSbreak(false);
        setLbreak(false);
        setTime(1500);
        setInitialTime(1500)
    }

    function setShortBreakState() {
        setWork(false);
        setSbreak(true);
        setLbreak(false);
        setTime(300);
        setInitialTime(300)
    }

    function setLongBreakState() {
        setWork(false);
        setSbreak(false);
        setLbreak(true);
        setTime(900);
        setInitialTime(900)
    }


    return (
        <div>
            {/*<Social/>*/}
            <div className="bg-black flex justify-center items-center h-screen">
                <div className="flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-2">
                        <Button onClick={setWorkState}>Focus</Button>
                        <Button onClick={setShortBreakState}>Short break</Button>
                        <Button onClick={setLongBreakState}>Long break</Button>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-[200px] font-semibold tabular-nums text-white">{watch()}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Button onClick={begin}>Start</Button>
                        <Button variant="secondary" onClick={pause}>Pause</Button>
                        <Button variant="destructive" onClick={restart}>Reset</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}