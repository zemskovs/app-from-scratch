// Array
export function last(list) {
  return list[list.length > 0 ? list.length - 1 : 0]
}

export function first(list) {
  return Array.isArray(list) ? list[0] :undefined;
}

export function setValue(object, path, value) {
  const keys = path.split('.'),
      last = keys.pop();

  keys.reduce(function (o, k) { return o[k] = o[k] || {}; }, object)[last] = value;
}

export function isEqual(one: any, two: any) {
  return JSON.stringify(one) === JSON.stringify(two)
}