import _ from 'lodash';

export function filterArray(array: any[], object: any, key: string) {
  //Remove Nulls from arrays
  array = array.filter(item => item);

  var index = array.findIndex(o => o[key] === object[key]);
  if (index === -1) array.push(object);
  else array.splice(index, 1);
  return array;
}

export function existInArray(array: any[], object: any, key: string) {
  var index = array.findIndex(o => o[key] === object[key]);

  return index !== -1;
}
