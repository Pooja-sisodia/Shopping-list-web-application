// const express = require("express")
// const mongoose = require("mongoose")
// const route = require("./routes/route")
// const app = express()

// app.use(express.json())

// const cors = require('cors')
// app.use(cors({
//     origin: '*'
// }));

// mongoose.connect("mongodb+srv://PoojaFunctionUp:PA44yjApvizLJGOY@cluster0.newxzkv.mongodb.net/Pooja1508-Db?retryWrites=true&w=majority",{useNewUrlParser: true})
// .then(()=>{console.log("MongoDb is connected")})
// .catch((err)=>{console.log(err)})

// app.use("/",route)

// app.use((req, res) => {
//     res.status(404).send({ status: false, message: "Url not found" })
// })

// app.listen(process.env.PORT || 3001,()=>{console.log("Express app is Running on Port "+(process.env.PORT||3001))})