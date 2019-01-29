export const identity = (x) => x;

export const unique = (values, fn = identity) => values.reduce((acc, value) => {
    return acc.filter((v) => fn(v) == fn(value)).length ? acc : [... acc, value];
}, []);

export const keyValueMap = (arr) => arr.reduce((acc, value) => {
    acc[value] = value;

    return acc;
}, {});
