const { json } = require('sequelize')
const Note = require ('../models/Note')

module.exports = {
    async createNote (req,res)  {
        try{
            const {title,nota} = req.body

            const new_note = await Note.findOne({where: {title}})

            if(new_note){
                res.status(401).json({message: "Já existe uma nota com este título!"})

            } else{
                const new_note = await Note.create({title,nota})
            
            res.status(200).json({new_note})

            }
        } catch (error){
            res.status(400).json({error})
        }


    }, 
    async updateNote(req, res){
        try {
            const {id} = req.params
        const {title , nota} = req.body

        const new_note = await Note.findOne({where: {id}})

        if(!new_note){
            res.status(401).json({message: "Nenhuma Nota Encontrada"})
        }else{
            const new_note = await Note.update({title,nota},{where: {id}})

            res.status(200).json({message: "Nota Atualizada Com sucesso!" })
        }

            
        } catch (error) {
            res.status(400).json({error})
            
        }

    },
    async listNotes(req,res){

    try {
        const new_note = await Note.findAll()

        if(!new_note){
            res.status(401).json({message:'Não existe usuários Cadastrados'})

        }
        res.status(200).json({message:"NOTAS",new_note})
        
    } catch (error) {
        res.status(400).json({error})
        
    }

    },
    
    async deleteNote(req, res){
        const {id} = req.params

        const new_note = await Note.findOne({where: {id}})
        if(!new_note) {
            res.status(401).json({message:'Nota não encontrada'})

        }else{
            await Note.destroy({where: {id}})
            res.status(200),json({message : 'Nota deletada com sucesso!'})
        }

    }, 
    async listNoteId(req,res){

        try {
            const {id} = req.params
            const searcn_id = await Note.findOne({where:{id}})
    
            if(!searcn_id){
                res.status(401).json({message:'A nota não existe!'})
    
            }
            res.status(200).json({searcn_id})
            
        } catch (error) {
            res.status(200).json({searcn_id})
            
        }
}  
}