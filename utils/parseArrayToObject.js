const parseArrayToObject = (arr = [], key = '', valueKey = '', modifier = {}) =>
  Array.isArray(arr)
    ? arr.reduce((accumulator, item) => {
        accumulator[item[key] || item[modifier.secondKey]] = valueKey
          ? item[valueKey]
          : item;
        return accumulator;
      }, {})
    : {};

export default parseArrayToObject