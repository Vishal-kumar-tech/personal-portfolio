const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend Running")
})

app.post("/api/contact", (req,res)=>{
    const {name, email, message} = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.status(200).json({
        success: true,
        message: "Message received successfully"
    });
    
})
app.listen(5000, () => {
    console.log("Server runnning on port 5000")
})
