
const Queryset = require("./../models/cards_sql")

const creat = async(req , res)=>{
    const set = await Queryset.creatSet( req.body.title , req.body.description)
    await req.body.cards.forEach(element => {
        Queryset.creatCards(element.term  , element.des2 )
    });
    res.send("add successfully")
    
}

const get = async(req , res) =>{
    const set = await Queryset.getSets()
    res.send(set)
}

const getCards = async(req , res) =>{
    const set = await Queryset.getCards(req.params.id)
    res.send(set)
}



module.exports = {
    creat,
    get,
    getCards
}
    

    
