export const allProps = [
  {
    name: 'mode',
    default: 'auto',
    type: String,
    description: 'Allowed values: <code>\'auto\'</code> (Default set by phone),  <code>\'international\'</code> (Format number with the dial code i.e. + 61), <code>\'national\'</code> (Format number without dial code i.e. 0321232)',
    inDemo: true,
    options: ['auto', 'national', 'international'],
  },
];

export const defaultOptions = [...allProps]
  .reduce((prv, crr) => {
    if (crr.name.includes('.')) {
      const [key, nestedKey] = crr.name.split('.');
      if (prv[key]) {
        Object.assign(prv[key], { [nestedKey]: crr.default });
      } else {
        Object.assign(prv, { [key]: { [nestedKey]: crr.default } });
      }
    } else {
      Object.assign(prv, { [crr.name]: crr.default });
    }
    return prv;
  }, {} as Record<string, any>);

const utils = {
  options: { ...defaultOptions },
};
export default utils;

export function getDefault(key: string) {
  const value = utils.options[key];
  if (typeof value === 'undefined') {
    return utils.options[key];
  }
  return value;
}

export function toLowerCase<T extends string> (str: T) {
  return str?.toLowerCase() as Lowercase<T>;
}

export function toUpperCase<T extends string> (str: T) {
  return str?.toUpperCase() as Uppercase<T>;
}