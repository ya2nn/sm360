/**
 * Take an url and append the given parameters.
 * @param { String } url - An url.
 * @param { Object } parameters - An object containing the parameters to add to the url.
 * @return { String }
 */
export const buildUrlWithParameters = (url, parameters) => {
  const modifiedUrl = new URL(url);
  modifiedUrl.search = new URLSearchParams(parameters).toString();
  return modifiedUrl.toString();
};
/**
 * Take an url with parameters and return the parameters as an object.
 * @param { URL } url - A string containing an url.
 * @return { Object }
 */

export const extractUrlParametersAsObject = (url = window.location) => {
  const urlParameters = new URLSearchParams(url.search);
  return Object.fromEntries(urlParameters);
};
/**
 * Take an url with parameters and return the parameters as an object,
 * with property transformed as arrays.
 * @param { URL } url - A string containing an url.
 * @return { Object }
 */

export const extractUrlParametersAsObjectWithArrayProperties = (url = window.location) => {
  const urlParameters = new URLSearchParams(url.search);
  const parametersObject = Object.fromEntries(urlParameters);

  for (const key in parametersObject) {
    // Transform value as an array
    const valueAsArray = parametersObject[key].indexOf(',') ? parametersObject[key].split(',') : parametersObject[key].split(); // Transform the numbers back to an integer type

    const valueAsArrayTyped = valueAsArray.map(item => isNaN(item) ? item : parseInt(item)); // Assign value back to object's property

    parametersObject[key] = valueAsArrayTyped;
  }

  return parametersObject;
};
/**
 * Build an url with it's current parameters and add the given parameters (update a parameter if it already exists).
 * @param { Object } parameters - An object containing parameters to add to the given url.
 * @param { URL } url - An url to which the parameters will be given.
 * @return { String }
 */

export const getUrlWithParameters = (parameters, url = window.location) => {
  const urlParameters = new URLSearchParams(url.search);
  const parametersObject = Object.fromEntries(urlParameters);
  const finalParameters = Object.assign({}, parametersObject, parameters);
  const modifiedUrl = new URL(url);
  modifiedUrl.search = new URLSearchParams(finalParameters).toString();
  return modifiedUrl.toString();
};
/**
 * Take an url and return it without parameters.
 * @param { String } url - The url to edit.
 * @return { String }
 */

export const removeUrlParameters = url => {
  const modifiedUrl = new URL(url);
  modifiedUrl.search = '';
  return modifiedUrl.toString();
};
/**
 * Update page url with new parameters using an object filled with parameters.
 * @param { Object } parameters - An object filled with parameters.
 * @param { String } url - A string containing an url.
 */

export const updatePageUrl = (parameters, url = window.location.href) => {
  const urlWithParameters = buildUrlWithParameters(url, parameters);
  window.history.replaceState(null, '', urlWithParameters);
};