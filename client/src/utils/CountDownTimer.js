import React from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import styles from "./CountDownTimer.module.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className={styles.time}>{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Countdown = () => {
    const timeZone = 'Europe/Brussels';
    const currentDate = new Date().toLocaleString('en-US', { timeZone });
    const targetDate = new Date('2024-05-03T12:00:00').toLocaleString('en-US', { timeZone });
    // Get the Unix timestamp in seconds
    const startTime = Math.floor(new Date(currentDate).getTime() / 1000);
    const endTime = Math.floor(new Date(targetDate).getTime() / 1000);

    // Calculate remaining time
    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    const screenSize = window.innerWidth;
    const countdownSize = screenSize > 768 ? 120 : 90;

    return (
        <section className={styles.countDownSection}>
            <svg>
                <defs>
                    <linearGradient id="gradient-1" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0%" stopColor="#16B1CD" />
                        <stop offset="100%" stopColor="#32A92A" />
                    </linearGradient>
                </defs>
            </svg>
            <div className={styles.countDownTimer}>
                <CountdownCircleTimer
                    {...timerProps}
                    size={countdownSize}
                    colors="url(#gradient-1)"
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({elapsedTime, colors}) => (
                        <span style={{colors}}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    size={countdownSize}
                    colors="url(#gradient-1)"
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                    })}
                >
                    {({elapsedTime, colors}) => (
                        <span style={{colors}}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime) + 1)}
          </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    size={countdownSize}
                    colors="url(#gradient-1)"
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                    })}
                >
                    {({elapsedTime, colors}) => (
                        <span style={{colors}}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    size={countdownSize}
                    colors="url(#gradient-1)"
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > 0
                    })}
                >
                    {({elapsedTime, colors}) => (
                        <span style={{colors}}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
                    )}
                </CountdownCircleTimer>
            </div>
        </section>
    );
}

export default Countdown;