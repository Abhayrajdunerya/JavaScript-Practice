// setInterval(() => {
//     const now = new Date();
//     console.log(now);
// }, 1000);

/**
 * LOGS:
 *  2026-03-28T11:29:00.870Z
    2026-03-28T11:29:01.883Z
    2026-03-28T11:29:02.894Z
    2026-03-28T11:29:03.902Z
    ...
 * 
 */


let time = 60;  // 1 min
const interval = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    const timeString = `${min}:${sec}`;

    console.log(timeString);

    if (time === 0) clearInterval(interval);

    time--;
}, 1000);

/**
 * LOGS:
 *  01:00
    00:59
    00:58
    00:57

    ...
    00:03
    00:02
    00:01
    00:00
 * 
 */