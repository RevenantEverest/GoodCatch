/*======== DEPENDENCIES ========*/

const express = require(`express`);
const logger = require(`morgan`);
const bodyParser = require(`body-parser`);
const methodOverride = require(`method-override`);

const path = require(`path`);

const PORT = process.env.PORT || 3000;
const app = express();

/*======== MIDDLEWARE ========*/

app.use(methodOverride(`_method`));

app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Static Config
app.use(express.static(`public`));

//Views Engine Config
app.set(`views`, path.join(__dirname, `views`));
app.set(`views engine`, `ejs`);

//PORT Config
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/*======== ROUTES ========*/
