const {request} = require('./request');

request('SELECT * FROM vapes')
.then(data => console.log(data))
.catch(err => console.log(err))
