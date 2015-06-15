# Optimalprime

This is an SDK for: [https://optimalprime.io](https://optimalprime.io)


Example usage:
```javascript
var optimalprime = require('optimalprime');

// Load up the SDK
optimalprime.initialize(API_KEY_HERE);

// Start getting some data
optimalprime.start(function(data) {
  console.log(data);
});
```
