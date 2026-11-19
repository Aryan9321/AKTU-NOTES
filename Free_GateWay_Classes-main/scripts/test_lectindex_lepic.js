const fs = require('fs');

const c = fs.readFileSync('public/lectindex.html', 'utf8');
console.log('Size of public/lectindex.html:', c.length);
console.log('Includes LePic:', c.includes('LePic'));
console.log('Includes learnerspick_01:', c.includes('learnerspick_01'));
console.log('Includes btn-channel-lepic:', c.includes('btn-channel-lepic'));
console.log('Includes data-channel="lepic":', c.includes('data-channel="lepic"'));
