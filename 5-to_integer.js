const args = process.argv[2];

const num = Number(args);

if (!isNaN(num) && args.trim() !== '') {
  console.log(`My number: ${parseInt(num)}`);
} else {
  console.log('Not a number');
}
