/**
 * Checks whether the incoming value is empty or null.
 *
 * @param {String} value
 */
 export const isEmpty = (value: string | null) => {
    if (typeof value === 'string') {
      return !value.trim();
    }
    return !value;
  };
  