const future = new Date(2037, 10, 19, 15, 23);
console.log(future);        // 2037-11-19T09:53:00.000Z

const calcDaysPasses = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))

const days1 = calcDaysPasses(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);         // 10



