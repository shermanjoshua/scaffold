export function helloThere() {
  return 'Hello';
}

export function reduced() {
  const list = [1, 1, 1, 1, 1];
  const value = list.reduce((acc, val) => acc + val, 0);
  return value;
}

export function mapped() {
  const list = [1, 2, 3, 4, 5];
  const value = list.map((val) => val * 10);
  return value;
}
