// const express = require('express');
// const app = express();

// app.use(express.json());

// const notes = [];

// // POST: Create a note
// app.post('/notes', (req, res) => {
//     notes.push(req.body);

//     res.status(201).json({
//         message: "Note created successfully"
//     });
// });

// // GET: Fetch all notes
// app.get('/notes', (req, res) => {
//     res.status(200).json({
//         message: "Notes fetched successfully",
//         notes: notes
//     });
// });

// // Delete: Delete a note
// app.delete('/notes/:id',(req,res)=>{
//     const id = req.params.id;

//     delete notes[id]
//     res.status(200).json({
//         msg:"note deleted succesfully"
//     })
// })

// // Patch: Update existing API
// app.patch('/notes/:id',(req,res)=>{
//     const id = req.params.id;
//     const description = req.body.description;

//     notes[id].description=description;
//     res.send(200).json({
//         msg:"Note updated succesfully"
//     })
// })
// module.exports = app;

// 2TlFumOrhR9FsvMk


// ****** DataBase Connection ********

const express = require('express');
const noteModel = require('./models/note.model');

const app = express();

app.use(express.json());

app.post('/notes', async (req, res) => {
try {
const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: 'Note Created'
    });

} catch (error) {
    res.status(500).json({
        message: 'Error creating note',
        error: error.message
    });
}


});

app.get('/notes', async(req,res)=>{
    const notes = await noteModel.find()
 
    res.status(200).json({
        message:"Notes fetched succesfully",
        notes: notes
    })
})

app.delete('/notes/:id', async (req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Note deleted succesfully"
    })
})

module.exports = app;
