/**
 * Example use:
 * filterObject(people, (person) => person.age > 21)
 */
export const filterObject = (
  obj: Record<string, any>,
  predicate: (item: any) => void,
) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
