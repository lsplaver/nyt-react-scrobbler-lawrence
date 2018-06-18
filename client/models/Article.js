var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleAchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
});

var Article = mongoose.model("Article", ArticleAchema);

module.exports = Article;