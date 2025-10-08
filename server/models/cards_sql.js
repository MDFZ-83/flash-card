const pool = require("./../utilities/sql_cards")


class Queryset {

    static creatSet = async(title , description)=>{
        const creat = await pool.query("insert into sets(title , description) values(? , ?)" , [ title , description  ])
    }

    static creatCards = async(term , description1  )=>{
        const [get] = await pool.query("select * from sets")
        const id_set = get.length 
        const creat = await pool.query("insert into cards(term , description1 , id_set) values(? , ? , ?)" , [term , description1 , id_set ])
    }

    static getSets = async()=>{
        const [get] = await pool.query("select * from sets")
        return get
    }

    static getCards = async(id)=>{
        const [get] = await pool.query("select * from cards as c  where c.id_set = ?",[id])
        return get
    }
}

module.exports = Queryset