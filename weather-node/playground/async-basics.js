console.log('Starting app');

setTimeout(() => {
  console.log('First setTimeout callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeous callback');
}, 0);

console.log('Finishing up');
