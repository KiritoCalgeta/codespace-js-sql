// user class
class User {
    // class constructor
    constructor() {
        this.numberOfArticles = 0;
    }

    // get method
    get numberOfArticles() {
        return this._numberOfArticles;
    }
    // set method
    set numberOfArticles(numberOfArticles) {
        this._numberOfArticles = numberOfArticles;
    }
    calScores() {

    }
}
class Author extends User {
    calScores() {
        return this._numberOfArticles * 10 + 20;
    }
}
class Editor extends User {
    calScores() {
        return this._numberOfArticles * 6 + 15;
    }
}

const author = new Author();

author.numberOfArticles = 8;

console.log("Author's scores: " + author.calScores());

const editor = new Editor();

editor.numberOfArticles = 15;
console.log("Editor's scores: " + editor.calScores());