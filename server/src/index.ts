import Config from "./Config"
import express from "express"

const app = express()


app.listen(Config.PORT || 3000, () => {
    console.log(`server start at ${Config.PORT}`)
})