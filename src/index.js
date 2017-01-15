import numeral from 'numeral';

const cVal = numeral(1000).format('$0,0.00');
console.log(`I formatted a number to money ${cVal}`);
