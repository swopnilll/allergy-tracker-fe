/**
 * Check if object is empty or not.
 *
 * @param {Object} object
 * @returns {Boolean}
 */
export const isEmpty = (object: object):boolean => {
  return (
    !object ||
    (Object.entries(object).length === 0 && object.constructor === Object)
  );
};
