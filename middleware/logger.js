let date = new Date();
console.log(date);
let currentHour = date.getHours();
console.log(currentHour);
let currentDate = date.getDay()
console.log(currentDate);

function logger(req, res, next) {
    if (currentDate > 0 && currentDate < 6 && currentHour > 8 && currentHour < 17) {
        next()
    } else {
        res.send(`<img  width="100%" height="600px" src=https://www.shutterstock.com/image-photo/sorry-were-closed-vintage-black-260nw-1678505488.jpg />`)
    }
}
module.exports = logger