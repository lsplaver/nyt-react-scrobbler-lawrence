const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
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

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;