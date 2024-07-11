const express = require("express");
const homeRouter = require(`${__dirname}/routers/homeRouter`);
const suggestRouter = require(`${__dirname}/routers/suggestRouter`);

const app = express();
const port = 3000;
//  récupérer les movies

// ! sans cette ligne ejs ne fonctionne pas
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Utilisation de mes routers
// middleware qui appel notre router
// le router se déclenche si parmis ces routes il y en a qui correspondent à la requete
// ! pour lier le router à l'app il faut toujours faire un middleware qui prend en argument le router
app.use(homeRouter);
app.use(suggestRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
