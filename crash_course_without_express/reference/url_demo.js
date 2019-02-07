const URL = require('url').URL;

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root) domain
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add param
console.log(myUrl.searchParams.append('abc', '123'));
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
