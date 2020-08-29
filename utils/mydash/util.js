// Array
function last(list) {
  return list[list.length > 0 ? list.length - 1 : 0]
}

function first(list) {
  return Array.isArray(list) ? list[0] :undefined;
}
