function invert(array) {
  let c = [];
  for (let i = 0; i < array.length; i++) {
    c.push(-array[i]);
  }
  return c;
}
