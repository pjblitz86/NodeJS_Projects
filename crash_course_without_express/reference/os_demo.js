const os = require('os');

// platform
console.log(os.platform());

// cpu stuff

console.log(os.arch());
console.log(os.cpus());

// ram
console.log(os.freemem());

// home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());
