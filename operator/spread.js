// The ... Operator
// The "spread" operator spreads elements of iterable objects:

const q1 = ["jan","Feb","March"]
const q2 = ["April","May","June"]
const q3 = ["july","August","September"]

const year=[...q1, ...q2, ...q3]

console.log(year)