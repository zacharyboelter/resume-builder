

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000
const multer = require('multer')
const path = require('path')


app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())

app.use("/uploads", express.static("uploads"))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})



app.get('/api', (req, res) => {
    res.json({
        message: 'Hello world',
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})