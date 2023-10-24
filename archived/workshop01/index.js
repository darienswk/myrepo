var express = require('express');
var exphbs = require('express-handlebars');
const path = require('path');

const port = process.env.PORT || 8080;

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        text: () => {
            const textList = ["Logic will get you from A to B. Imagination will take you everywhere.",
                "There are 10 kinds of people. Those who know binary and those who don't.",
                "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
                "It's not that I'm so smart, it's just that I stay with problems longer.",
                "It is pitch dark. You are likely to be eaten by a grue."];
            const randomIndex = Math.floor(Math.random() * textList.length);
            return textList[randomIndex];
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});