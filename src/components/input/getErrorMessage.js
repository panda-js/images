/**
 * @param {string} errorType
 * @return {string}
 */
const getErrorMessage = (errorType) => {
  if (errorType === 'maxLength') {
    return "You've reached the maximum number of characters";
  }

  if (errorType === 'validate') {
    return 'Image is required';
  }

  return 'Field is required';
};

export default getErrorMessage;
