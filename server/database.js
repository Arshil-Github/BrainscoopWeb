const mongoose = require("mongoose")

const connectionURL = "mongodb+srv://admin:NKvalSPuz4pkffng@cluster0.7ffcbvq.mongodb.net/BrainScoopBlog"
mongoose.connect(connectionURL);

const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    time: Number
})

const PostDb = mongoose.model("Posts", postSchema);

module.exports = {PostDb}