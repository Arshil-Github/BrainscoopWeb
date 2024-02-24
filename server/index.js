const {PostDb} = require("./database");
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')

let app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
}))


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your allowed origin(s)
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Include all methods used by your frontend
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add headers sent by your frontend
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow sending cookies (if applicable)
    next();
  });

app.get("/allPosts", async (req, res) =>{
    const PostArray = await PostDb.find({});
    res.json({
        result: PostArray
    })
})

app.get('/post/?:postId', async (req, res)=>{
    const postId = req.params.postId;
    
    try{
        let post = await PostDb.findById(postId);
        res.json({
            result: post
        })
    }
    catch{
        res.json({
            result: "Invalid Id"
        })
    }

    
})

app.post('/newPost', async (req, res) =>{

    const author = req.body.author;
    const title = req.body.title;
    const content = req.body.content;
    const time = new Date().getTime();

    try{
        await PostDb.create({
            author,
            title,
            content,
            time
        })
        res.json({
            result: "Post created successfully"
        })
    }
    catch{
        res.json({
            result: "Post not created"
        })
    }
    

});

app.listen(PORT, ()=>{
    console.log(`Connected to PORT ${PORT}`)
})