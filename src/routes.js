const {Router} = require('express')

const NotesController = require('./controller/NotesController')

const router = Router()

router.post('/note-create' , NotesController.createNote)
router.put('/note-update/:id' , NotesController.updateNote)
router.get('/note-list' , NotesController.listNotes)
router.get('/note-getid/:id' , NotesController.listNoteId)
router.delete('/note-delete/:id' , NotesController.deleteNote)

module.exports = router 