const express = require("express");
const logger = require("./middleware/logger")
const app = express();
const PORT = 8001;

// app.get('/', (req, res) => {
//     res.send("hello ghada")
// })
app.use(logger)

app.use(express.static(__dirname + "/public"))

app.listen(PORT, (err) => {
    err
        ? console.log("error", err)
        : console.log(`the server runing on port ${PORT}`);
})
