// Lazy Map generator
const lazyMap = function* (sequence, fn) {
  for (const value of sequence) {
    yield fn(value);
  }
}


const gen = lazyMap([1, 2, 3], x => x * 2);

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

for (const value of lazyMap([1, 2, 3], x => x * 2)) {
  console.log(value);
}