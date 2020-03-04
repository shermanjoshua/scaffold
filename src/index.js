export function helloThere() {
  return 'Hello';
}

export function reduced() {
  const list = [1, 1, 1, 1, 1];
  const value = list.reduce((acc, val) => acc + val, 0);
  return value;
}
