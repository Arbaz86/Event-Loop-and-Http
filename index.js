const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/books", (req, res) => {
    res.json({
        book1: "Harry Porter",
        book2: "Rich Dad Poor Dad",
        book3: "Think And Grow Rich",
        book4: "The Power Of Habit"
    })
})

app.listen(port, () => {
    console.log(`listening to the ${port}`);
})
