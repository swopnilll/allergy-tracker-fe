/**
 * Method to set the item with the specified key in localstorage.
 *
 * @param {String} key
 * @param {String|Array|Number|Object|Boolean} value
 * @returns {Boolean}
 */
export const setValueInLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);

  return true;
};

/**
 * Method to get the item from the localstorage.
 *
 * @param {string} key
 * @returns {String}
 */

export const getValueFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * Method to remove item from the localstorage.
 *
 * @param {string} key
 * @returns {Boolean}
 */
export const removeValueFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);

  return true;
};

/**
 * Method to clear local storage.
 *
 * @returns {Boolean}
 */
export const clearLocalStorate = () => {
  localStorage.clear();

  return true;
};
