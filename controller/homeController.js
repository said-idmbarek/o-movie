const movies = require(`${__dirname}/../data/movies.json`);

const homePage = (req, res) => {

    // req.query.leNameFournisDansLeHtml
    const search = req.query.search;
    
    // si j'ai pas de recherche je renvoi tous mes films
    if(!search){
        res.status(200).render("pages/home", { movies });
        return;
    }

    // je filtre mon tableau et crée un nouveau tableau avec uniquement les films de ma recherche 
    // voir doc fonction filter et fonction includes
    const moviesFiltered = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
    
    // je renvois ma page d'accueil avec mes films filtrés
    res.status(200).render("pages/home", { movies : moviesFiltered });
}

module.exports = { homePage };