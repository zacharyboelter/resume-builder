
const { Configuration, OpenAIApi} = require('openai')
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


const configuration = new Configuration({
    apiKey: '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'
})


const openai = new OpenAIApi(configuration)


// code snippet above uses the text-davinci-003 model to generate an appropriate answer to the prompt. The other key values helps us generate the specific type of response we need.
const GPTFunction = async (text) => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        temperature: 0.6,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    })
    return response.data.choice[0].text
}


// upload.single("headshotImage") function adds the image uploaded via the form to the uploads folder
app.post("resume/create", upload.single("headshotImage"), async (req, res) => {
    const {
        fullName,
        currentPosition,
        currentLength,
        currentTechnologies,
        workHistory, //JSON format
    } = req.body

    const workArray = JSON.parse(workHistory) //an

    const newEntry = {
        id: generateId(),
        fullName,
        image_url: `http://localhost:4000/uploads/${req.file.filename}`,
        currentPosition,
        currentLength,
        currentTechnologies,
        workHistory: workArray,
    }

    //loops through workArray items and convert them into a string
    const remainderText = () =>{
        let stringText = ''
        for (let i = 0; i < workArray.length; i++) {
            stringText += `${workArray[i].name} as a ${workArray[i].position}`
        }
        return stringText
    }
})



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})