const now = new Date();
console.log(now);           // 2026-03-28T10:53:31.144Z

// ISO language code table - lingoes.net
console.log(new Intl.DateTimeFormat('en-US').format(now));  // 3/28/2026
console.log(new Intl.DateTimeFormat('en-GB').format(now));  // 28/03/2026

const options = {
    hour: 'numeric',    // numeric, 2-digit
    minute: 'numeric',  // numeric, 2-digit
    day: 'numeric',
    month: 'long',      // numeric, 2-digit, narrow, short, long
    year: 'numeric',    // numeric, 2-digit
    weekday: 'long', // narrow, short, long
}

console.log(new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',    // numeric, 2-digit
    minute: 'numeric',  // numeric, 2-digit
}).format(now));        // 4:26 PM


console.log(new Intl.DateTimeFormat('en-US', options).format(now));     // Saturday, March 28, 2026 at 4:34 PM                             // 4:26 PM

const locale = navigator.language;
console.log(locale);        // en-US

console.log(new Intl.DateTimeFormat(locale, options).format(now));      // Saturday, March 28, 2026 at 4:36 PM
