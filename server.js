const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');
const rollbar = new Rollbar({
    accessToken: '340d9b78d25b44359d8a0b09ae288587',
    captureUncaught: true,
    captureUnhandledRejections: true,

})

const app = express();

app.use('/style', express.static('./public/styles.css'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname), '/public/index.html')
})


app.use(express.json());

const port = process.env.PORT || 4400;

app.listen(port, () => {
    console.log(`Server servin on ${port}`)
})