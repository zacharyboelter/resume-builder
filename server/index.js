

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000
const multer = require('multer')
const path = require('path')


app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())

// function enables Node.js to serve the contents of an uploads folder. The contents refer to static files such as images, CSS, and JavaScript files.
app.use("/uploads", express.static("uploads"))


// stores the images in the upload folder and renames the image to its upload time (to prevent filename conflicts)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

// upload variable passes the configuration to Multer and set a size limit of 5MB for the images

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5}
})


app.get('/api', (req, res) => {
    res.json({
        message: 'Hello world',
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})