const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, -400, -67];

// FIND
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);   // -400

const notPresent = movements.find(mov => mov > 5000);
console.log(notPresent);        // undefined


// FIND INDEX
const firstWithdrawalIndex = movements.findIndex(mov => mov < 0);
console.log(`${movements[firstWithdrawalIndex]} at index: ${firstWithdrawalIndex}`);    // -400 at index: 2

const notPresentIndex = movements.findIndex(mov => mov > 5000);
console.log(notPresentIndex);   // -1


// INDEX OF
console.log(movements.indexOf(-400));   // 2
console.log(movements.indexOf(5000));   // -1

// FIND LAST
const firstWithdrawalLastEl = movements.findLast(mov => mov < 0);
console.log(firstWithdrawal);       // -400

const notPresentEL = movements.find(mov => mov > 5000);
console.log(notPresentEL);          // undefined

// FIND LAST INDEX
const firstWithdrawalIndexLast = movements.findLastIndex(mov => mov < 0);
console.log(`${movements[firstWithdrawalIndex]} at index: ${firstWithdrawalIndex}`);    // -400 at index: 2

const notPresentIndexEl = movements.findLastIndex(mov => mov > 5000);
console.log(notPresentIndexEl);   // -1

