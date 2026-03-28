const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

console.log('\n1. ---- FOR LOOP ----');
for (let i = 0; i < movements.length; i++) {
    if (movements[i] > 0) console.log(`${i+1}: You deposited ${movements[i]}`);
    else console.log(`${i+1}: You withdrew ${Math.abs(movements[i])}`);
}

console.log('\n2. ---- FOR OF LOOP ----');
for (const movement of movements) {
    if (movements > 0) console.log(`You deposited ${movements}`);
    else console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('\n3. ---- FOR OF LOOP (with index) ----');
for (const [i, movement] of movements.entries()) {
    if (movements > 0) console.log(`${i+1}: You deposited ${movements}`);
    else console.log(`${i+1}: You withdrew ${Math.abs(movement)}`);
}

console.log('\n4. ---- FOR EACH LOOP ----');
movements.forEach((movement, i, array) => {
    if (movements > 0) console.log(`${i+1}: You deposited ${movements}`);
    else console.log(`${i+1}: You withdrew ${Math.abs(movement)}`);
})