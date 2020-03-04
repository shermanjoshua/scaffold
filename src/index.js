export function helloThere() {
  return 'Hello';
}

const bar = [1, 1, 1, 1, 1];

export function reduced() {
  let value = bar.reduce((acc, value) => acc + value, 0);
  return value;
}
