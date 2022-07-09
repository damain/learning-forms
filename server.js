
//Seting up the server
const express = require('express')
const app = express()
const port = 3002
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Creating routes to respond when the url is called
app.get('/', (req, res) => {
    res.send('sup')
})

app.get('/hello', (req, res) => {
    res.send("Don't get me I am a POST route")
})
app.get('/multiply', (req, res) => {
    res.send("Don't get me I am a POST route")
})

app.post('/hello', (req, res) => {
    //print the body that was sent for troubleshooting 
    console.dir(req.body)

    //check for error
    if (!req.body.name) {
        res.send(`You didn't tell me your name, I got ${JSON.stringify(req.body)} instead`)
        return
    }

    res.send(`hello ${req.body.name}`)
})

app.post('/multiply', (req, res) => {
    //print the body that was sent for troubleshooting 
    console.dir(req.body)

    // get the first and second values from the body
    const { first, second } = req.body

    // set up message to hold string that will be returned to the user and default to displaying an error 
    let message = `I got ${JSON.stringify(req.body)} . You didn't send:`
    if (!first) {
        message += ` [first] `
    }
    if (!second) {
        message += ` [second] `
    }
    
    // if we got both numbers then set message to: first * second = answer
    if (first && second) {
        message = ` ${first} x ${second} = ${Number(first) * Number(second)}`
    }

    res.send(message)
})

// make the server start listening for requests
app.listen(port, () => {
    console.log(`listening on port:${port} 🚀`)
})
