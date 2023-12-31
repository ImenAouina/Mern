const AuthorController = require("../controllers/author.controller")

module.exports=(app) => {
    app.post("/api/authors", AuthorController.createNewAuthor)
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.get("/api/authors/:id", AuthorController.findOneAuthor)
    app.patch("/api/authors/:id", AuthorController.updateExistingAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAnExistingAuthor)
    
}