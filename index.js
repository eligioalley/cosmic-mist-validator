const validator = require('validator');

/**
 * Validates an email address.
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email address is valid; otherwise, false.
 */
function validateEmail(email) {
  return validator.isEmail(email);
}

/**
 * Validates a URL.
 * @param {string} url The URL to validate.
 * @returns {boolean} True if the URL is valid; otherwise, false.
 */
function validateURL(url) {
  return validator.isURL(url);
}

/**
 * Validates a mobile phone number.
 * @param {string} phone The mobile phone number to validate.
 * @param {string} [locale='en-US'] The locale to use for validation.
 * @returns {boolean} True if the mobile phone number is valid; otherwise, false.
 */
function validateMobilePhone(phone, locale = 'en-US') {
  return validator.isMobilePhone(phone, locale);
}

/**
 * Validates a postal code.
 * @param {string} code The postal code to validate.
 * @param {string} [locale='en-US'] The locale to use for validation.
 * @returns {boolean} True if the postal code is valid; otherwise, false.
 */
function validatePostalCode(code, locale = 'en-US') {
  return validator.isPostalCode(code, locale);
}

/**
 * Validates an IP address (both IPv4 and IPv6).
 * @param {string} ip The IP address to validate.
 * @returns {boolean} True if the IP address is valid; otherwise, false.
 */
function validateIP(ip) {
  return validator.isIP(ip);
}

/**
 * Validates a JSON string.
 * @param {string} str The string to validate.
 * @returns {boolean} True if the string is valid JSON; otherwise, false.
 */
function validateJSON(str) {
  return validator.isJSON(str);
}

/**
 * Sanitizes a string by escaping HTML characters.
 * @param {string} str The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitizeString(str) {
  return validator.escape(str);
}

module.exports = {
  validateEmail,
  validateURL,
  validateMobilePhone,
  validatePostalCode,
  validateIP,
  validateJSON,
  sanitizeString
};
