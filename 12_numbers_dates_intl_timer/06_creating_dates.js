// Create a date
const now = new Date();
console.log(now);                               // 2026-03-28T10:25:17.837Z

console.log(new Date('Aug 02 2020 18:05:41'));  // 2020-08-02T12:35:41.000Z
console.log(new Date('December 24, 2015'));     // 2015-12-23T18:30:00.000Z

console.log(new Date(2037, 10, 19, 15, 23, 5)); // 2037-11-19T09:53:05.000Z
console.log(new Date(2037, 10, 31));            // 2037-11-30T18:30:00.000Z

console.log(new Date(0));                       // 1970-01-01T00:00:00.000Z
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 1970-01-04T00:00:00.000Z

// Working with dates
const future = new Date(2037, 10, 19, 15, 23)
console.log(future);                    // 2037-11-19T09:53:00.000Z
console.log(future.getFullYear());      // 2037
console.log(future.getMonth());         // 10
console.log(future.getDate());          // 19
console.log(future.getDay());           // 4 - weekday
console.log(future.getHours());         // 15
console.log(future.getMinutes());       // 23
console.log(future.getSeconds());       // 0
console.log(future.toISOString());      // 2037-11-19T09:53:00.000Z
console.log(future.getTime());          // 2142237180000
console.log(new Date(2142237180000));   // 2037-11-19T09:53:00.000Z

console.log(Date.now());                // today's timestamp

future.setFullYear(2040);
console.log(future);                    // 2040-11-19T09:53:00.000Z
// ...more setters - see the doc

const today = new Date();
const day = `${today.getDate()}`.padStart(2, 0);            
const month = `${today.getMonth() + 1}`.padStart(2, 0);     // zero based
const year = today.getFullYear();
const hour = today.getHours();
const min = today.getMinutes();

const formattedDate = `${day}/${month}/${year}, ${hour}:${min}`
console.log(formattedDate);







