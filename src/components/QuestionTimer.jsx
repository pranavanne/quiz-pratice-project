import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout}) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("setting timeout");
        const timer = setTimeout(() => {
            onTimeout()
        }, timeout);

        return () => {
            clearTimeout(timer);
        }; // clean up function
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("setting interval");
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => {
                return prevRemainingTime - 100;
            })
        }, 100);

        return () => {
            clearInterval(interval);
        }; // clean up function executed when run again or gets removed from dom.
    }, []);

    return (
        <progress id="question-time" value={remainingTime} max={timeout}></progress>
    );
}