# cosmic-mist-validator

A simple, yet powerful library for validating and sanitizing inputs using the `validator` package. Whether you're validating emails, URLs, mobile numbers, or even sanitizing strings to escape HTML characters, `cosmic-mist-validator` has got you covered.

## Installation

```bash
npm install cosmic-mist-validator
```

## Usage

Below are examples demonstrating how to use `cosmic-mist-validator`:

```javascript
const cmValidator = require('cosmic-mist-validator');

// Validate an Email
console.log(cmValidator.validateEmail('example@example.com')); // true

// Validate a URL
console.log(cmValidator.validateURL('https://www.example.com')); // true

// Validate a Mobile Phone
console.log(cmValidator.validateMobilePhone('+1234567890', 'en-US')); // true

// Validate a Postal Code
console.log(cmValidator.validatePostalCode('12345', 'US')); // true

// Validate an IP Address
console.log(cmValidator.validateIP('192.168.1.1')); // true

// Validate a JSON String
console.log(cmValidator.validateJSON('{"key":"value"}')); // true

// Sanitize a String
console.log(cmValidator.sanitizeString('<script>alert("xss")</script>'));
// "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
