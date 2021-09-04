const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    //res.send('Hello World! 5555  666 777 888');
    //res.send('Hello World! 555');
    res.send('test kittisak 555');

});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


