const displayForm = (req, res) => {
    res.status(200).render("pages/suggestForm");
};

const handleForm = (req, res) => {

    res.status(200).send("formulaire traitement todo");
}

module.exports = { displayForm, handleForm };
