const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements, (movement, i) => movement > 0 ? 'deposits' : 'withdrawals');
console.log(groupedMovements);

/**
 * LOGS:
 *  [Object: null prototype] {
        deposits: [ 200, 450, 3000, 70, 1300 ],
        withdrawals: [ -400, -650, -130 ]
    }
 */