export const withoutIndex = (array, index) =>
array.slice(0, index).concat(array.slice(index+1))