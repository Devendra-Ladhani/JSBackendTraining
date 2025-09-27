import express from "express";

const app = express();

// app.get('/', (req,res)=>{
//     res.send("Hello World");
// })

// List 

app.use(express.static('dist'))

app.get('/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'joke 1',
            content: 'This is Joke 1'
        },
        {
            id: 2,
            title: 'joke 2',
            content: 'This is Joke 2'
        },
        {
            id: 3,
            title: 'joke 3',
            content: 'This is Joke 3'
        },
        {
            id: 4,
            title: 'joke 4',
            content: 'This is Joke 4'
        },
        {
            id: 5,
            title: 'joke 5',
            content: 'This is Joke 5'
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is listenng at ${port}`)
})
